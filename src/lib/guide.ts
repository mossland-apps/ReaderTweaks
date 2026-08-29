import type { Article } from './types';
import { SITE, canonical } from './seo';

/**
 * Turn a loose human duration ("20 minutes", "1 hour 30 minutes") into an
 * ISO-8601 duration for schema.org. Returns undefined if nothing parseable.
 */
export function parseDurationToISO(text?: string): string | undefined {
  if (!text) return undefined;
  const hours = text.match(/(\d+)\s*h(?:our|r)?s?/i);
  const minutes = text.match(/(\d+)\s*m(?:in(?:ute)?s?)?\b/i);
  if (!hours && !minutes) return undefined;
  let out = 'PT';
  if (hours) out += `${hours[1]}H`;
  if (minutes) out += `${minutes[1]}M`;
  return out === 'PT' ? undefined : out;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonLd = Record<string, any>;

/** schema.org HowTo for a step-by-step guide, or null when it has no steps. */
export function howToJsonLd(guide: Article, path: string): JsonLd | null {
  if (!guide.steps || guide.steps.length === 0) return null;
  const totalTime = parseDurationToISO(guide.estimatedTime);
  const ld: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.summary,
    mainEntityOfPage: canonical(path),
    publisher: { '@type': 'Organization', name: SITE.name, url: `${SITE.url}/` },
    step: guide.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.instruction,
      text: s.detail ? `${s.instruction}. ${s.detail}` : s.instruction,
      ...(s.image ? { image: canonical(s.image) } : {}),
    })),
  };
  if (totalTime) ld.totalTime = totalTime;
  if (guide.whatYouNeed && guide.whatYouNeed.length > 0) {
    ld.supply = guide.whatYouNeed.map((name) => ({ '@type': 'HowToSupply', name }));
  }
  return ld;
}
