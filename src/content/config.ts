import { defineCollection, reference, z } from 'astro:content';

const brands = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    order: z.number(),
    blurb: z.string(),
    homepage: z.string().url().optional(),
    founded: z.number().optional(),
  }),
});

const specsSchema = z
  .object({
    screenSize: z.string().optional(),
    resolution: z.string().optional(),
    ppi: z.string().optional(),
    color: z.boolean().optional(),
    frontlight: z.boolean().optional(),
    warmLight: z.boolean().optional(),
    storage: z.string().optional(),
    waterproof: z.boolean().optional(),
    physicalButtons: z.boolean().optional(),
    stylusSupport: z.boolean().optional(),
    audioSupport: z.boolean().optional(),
    os: z.string().optional(),
    formats: z.array(z.string()).optional(),
    weight: z.string().optional(),
    dimensions: z.string().optional(),
  })
  .default({});

const devices = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    shortName: z.string(),
    brand: reference('brands'),
    status: z.enum(['complete', 'in-progress']).default('in-progress'),
    order: z.number().default(0),
    releaseYear: z.number(),
    summary: z.string(),
    specs: specsSchema,
    aliases: z.array(z.string()).default([]),
    koreaderSupport: z
      .enum(['official', 'community', 'experimental', 'none'])
      .default('community'),
    illustration: z.string().optional(),
  }),
});

const sectionEnum = z.enum([
  'guides',
  'koreader',
  'calibre',
  'customization',
  'troubleshooting',
  'accessories',
  'comparisons',
]);

const linkRef = z.object({ text: z.string(), href: z.string() });

const guideStep = z.object({
  instruction: z.string(),
  detail: z.string().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  warning: z.string().optional(),
  tip: z.string().optional(),
  command: z.string().optional(),
  commandCaption: z.string().optional(),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    /** Short URL segment within the device + section, e.g. "install". */
    pageSlug: z.string().optional(),
    device: reference('devices'),
    section: sectionEnum,
    type: z.enum(['overview', 'guide', 'fix', 'list']).default('guide'),
    summary: z.string(),
    lastUpdated: z.coerce.date(),
    datePublished: z.coerce.date().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
    difficulty: z.enum(['Easy', 'Moderate', 'Advanced']).optional(),
    estimatedTime: z.string().optional(),
    // legacy alias, still read from older content
    timeRequired: z.string().optional(),
    whatYouNeed: z.array(z.string()).default([]),
    author: z.string().default('ReaderTweaks'),
    // Guide metadata — kept current because KOReader / Kindle steps change often.
    software: z.string().optional(),
    softwareVersion: z.string().optional(),
    testedDevice: reference('devices').optional(),
    lastTested: z.coerce.date().optional(),
    prerequisites: z.array(linkRef).default([]),
    steps: z.array(guideStep).default([]),
    nextStep: linkRef.optional(),
    related: z.array(linkRef).default([]),
    // Extra words people might search for that are not already in the text.
    searchTerms: z.array(z.string()).default([]),
    // Comparisons overview only: which devices the spec table should show.
    compareWith: z.array(reference('devices')).default([]),
  }),
});

const software = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    kind: z.enum(['app', 'plugin', 'tool']),
    parent: z.string().optional(),
    summary: z.string(),
    aliases: z.array(z.string()).default([]),
    currentVersion: z.string().optional(),
    homepage: z.string().url().optional(),
  }),
});

const troubleshooting = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pageSlug: z.string().optional(),
    device: reference('devices'),
    software: z.string().optional(),
    softwareVersion: z.string().optional(),
    summary: z.string(),
    symptoms: z.array(z.string()).min(1),
    beforeYouStart: z.array(z.string()).default([]),
    mostCommonCause: z.string(),
    fixes: z
      .array(
        z.object({
          title: z.string(),
          rationale: z.string().optional(),
          steps: z.array(z.string()).default([]),
          note: z.string().optional(),
        }),
      )
      .min(1),
    recovery: z.string().optional(),
    related: z.array(linkRef).default([]),
    searchTerms: z.array(z.string()).default([]),
    decisionTree: z
      .object({
        question: z.string(),
        branches: z.array(
          z.object({
            label: z.string(),
            hint: z.string().optional(),
            href: z.string(),
          }),
        ),
      })
      .optional(),
    difficulty: z.enum(['Easy', 'Moderate', 'Advanced']).default('Moderate'),
    estimatedTime: z.string().optional(),
    lastTested: z.coerce.date(),
    lastUpdated: z.coerce.date(),
    draft: z.boolean().default(false),
    author: z.string().default('ReaderTweaks'),
  }),
});

const learn = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['koreader', 'concepts', 'software', 'formats', 'buying']),
    lastUpdated: z.coerce.date(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
    relatedDevices: z.array(reference('devices')).default([]),
    author: z.string().default('ReaderTweaks'),
  }),
});

const accessories = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum([
      'case',
      'stylus',
      'reading-light',
      'screen-protector',
      'stand',
      'charger',
      'other',
    ]),
    devices: z.array(reference('devices')).default([]),
    maker: z.string().optional(),
    affiliateUrl: z.string().url().optional(),
    vendor: z.string().default('amazon'),
    blurb: z.string(),
    priceBand: z.enum(['$', '$$', '$$$']).optional(),
    lastUpdated: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

// Future feature: full device-vs-device comparison pages. The schema exists now
// so content can be written and linked; nothing renders a standalone page yet.
const comparisons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    deviceA: reference('devices'),
    deviceB: reference('devices'),
    summary: z.string(),
    verdict: z.string(),
    lastUpdated: z.coerce.date(),
    draft: z.boolean().default(true),
  }),
});

// Future feature: contributor bylines. Schema only; no author pages yet.
const authors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    url: z.string().url().optional(),
  }),
});

export const collections = {
  brands,
  devices,
  articles,
  software,
  troubleshooting,
  learn,
  accessories,
  comparisons,
  authors,
};
