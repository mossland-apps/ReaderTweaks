// Lightweight multi-entity search ranking.
// Pure functions only — the same module runs at build time (to shape the index)
// and in the browser (to rank against a typed query). No Astro imports.

export type SearchDocType =
  | 'device'
  | 'software'
  | 'guide'
  | 'troubleshooting'
  | 'section'
  | 'accessory'
  | 'learn';

export interface SearchDoc {
  id: string;
  type: SearchDocType;
  title: string;
  url: string;
  summary?: string;
  device?: string; // device slug
  brand?: string; // brand name
  software?: string; // software name
  section?: string; // section slug
  keywords?: string[];
}

export interface RankedDoc extends SearchDoc {
  score: number;
}

const STOP = new Set([
  'the', 'a', 'an', 'and', 'or', 'to', 'of', 'for', 'with', 'on', 'in', 'my',
  'how', 'do', 'does', 'is', 'it', 'that', 'this', 'vs', 'versus',
]);

/** Lowercase, split on non-alphanumerics, drop single characters. */
export function tokenize(input: string): string[] {
  return (input.toLowerCase().match(/[a-z0-9]+/g) ?? []).filter((t) => t.length >= 2);
}

function queryTokens(input: string): string[] {
  const raw = tokenize(input);
  const kept = raw.filter((t) => !STOP.has(t));
  // If the query is entirely stop words, fall back to the raw tokens.
  return kept.length > 0 ? kept : raw;
}

interface Field {
  tokens: string[];
  weight: number;
}

function docFields(doc: SearchDoc): Field[] {
  const facet = [doc.software, doc.brand, doc.section, doc.device]
    .filter(Boolean)
    .join(' ');
  return [
    { tokens: tokenize(doc.title), weight: 10 },
    { tokens: tokenize((doc.keywords ?? []).join(' ')), weight: 6 },
    { tokens: tokenize(facet), weight: 5 },
    { tokens: tokenize(doc.summary ?? ''), weight: 3 },
  ];
}

function tokenMatches(fieldToken: string, queryToken: string): boolean {
  return fieldToken === queryToken || fieldToken.includes(queryToken);
}

/** Score one doc against already-tokenized query terms. 0 means "not a match". */
export function scoreDoc(qTokens: string[], doc: SearchDoc): number {
  if (qTokens.length === 0) return 0;
  const fields = docFields(doc);
  let score = 0;
  const matchedTerms = new Set<string>();

  for (const term of qTokens) {
    let best = 0;
    for (const field of fields) {
      for (const ft of field.tokens) {
        if (tokenMatches(ft, term)) {
          best = Math.max(best, field.weight + (ft === term ? 2 : 0));
        }
      }
    }
    if (best > 0) {
      score += best;
      matchedTerms.add(term);
    }
  }

  // Require the doc to cover most of the query, so a lone shared word
  // ("calibre") does not drag in every page that happens to mention it.
  const required = qTokens.length <= 1 ? 1 : Math.ceil(qTokens.length * 0.6);
  if (matchedTerms.size < required) return 0;

  // Reward docs that hit every term, and hit them across more than one field.
  if (matchedTerms.size === qTokens.length) score += 8;
  score += matchedTerms.size * 1.5;

  return score;
}

/** Rank docs for a raw query string, best first. Non-matches are dropped. */
export function rankDocs(query: string, docs: SearchDoc[], limit = 30): RankedDoc[] {
  const qTokens = queryTokens(query);
  if (qTokens.length === 0) return [];
  const typeOrder: Record<SearchDocType, number> = {
    troubleshooting: 0,
    guide: 1,
    device: 2,
    software: 3,
    accessory: 4,
    section: 5,
    learn: 6,
  };
  return docs
    .map((doc) => ({ ...doc, score: scoreDoc(qTokens, doc) }))
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score || typeOrder[a.type] - typeOrder[b.type] || a.title.localeCompare(b.title))
    .slice(0, limit);
}
