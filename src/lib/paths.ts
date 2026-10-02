/**
 * Learning areas whose hub URL shows their main guide. The hub URL is the one
 * public address for that guide: the guide's own deeper URL permanently
 * redirects to the hub (see next.config.ts) and is left out of the sitemap.
 *
 * Kept outside src/data/site.ts so client components can build links without
 * bundling the whole guide library.
 */
export const hubGuides: Record<string, string> = {
  "chatgpt-prompts": "chatgpt-prompts/useful-chatgpt-prompts",
  "high-paid-skills": "high-paid-skills/highest-paid-skills",
  "high-demand-skills-usa": "high-demand-skills-usa/high-demand-skills-in-the-usa",
  "high-demand-skills-india": "high-demand-skills-india/high-demand-skills-in-india",
};

const hubForGuide: Record<string, string> = Object.fromEntries(
  Object.entries(hubGuides).map(([hub, guideSlug]) => [guideSlug, hub]),
);

/** Public path of a guide (the hub address for guides shown on a hub). */
export function guidePath(slug: string): string {
  const hub = hubForGuide[slug];
  return hub ? `/learn/${hub}` : `/learn/${slug}`;
}
