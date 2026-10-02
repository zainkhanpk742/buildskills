/** Shape of one entry in /search-index.json (built from src/data/site.ts). */
export type SearchHit = {
  href: string;
  title: string;
  kind: "Question" | "Guide" | "Learning Path" | "Tool" | "Topic";
  detail: string;
  hay: string;
};

/** Rank hits for a query: every term found in the text counts once. */
export function rankHits(all: SearchHit[], query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  return all
    .map((hit) => ({ hit, score: terms.reduce((count, term) => count + (hit.hay.includes(term) ? 1 : 0), 0) }))
    .filter(({ score }) => score > 0 && score / terms.length >= 0.6)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ hit }) => hit);
}
