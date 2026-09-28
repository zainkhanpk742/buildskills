# BuildSkills

BuildSkills is a Next.js learning and services website. Its guides are organized
around practical questions, with connected learning paths and links to relevant
services.

## Run locally

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local address shown by Next.js.

Run `npm run build` to check the production build. This repository does not
automatically deploy when you run the build.

## Search and content standards

The site follows Google's published search guidance; no change can guarantee
indexing, rankings, or traffic. Keep these checks in mind when adding or revising
pages:

- Write for a real audience and make each page useful, accurate, original, and
  complete enough to resolve its stated question. Do not publish near-duplicate
  pages for keyword variations or add content simply to target search traffic.
- Give every indexable page a distinct, concise title, a clear main heading, and
  an accurate description. Use relevant language naturally; do not add
  keyword-stuffed titles, hidden text, or a `meta keywords` tag.
- Link related guides with descriptive anchor text. Keep URLs stable and make
  important pages reachable through normal links.
- Keep `src/app/sitemap.ts` aligned with public routes. Do not set sitemap
  modification dates to the current time unless they reflect a real content
  update. Exclude incomplete or thin pages until they provide unique value;
  use `noindex, follow` while they are still useful to visitors. `src/app/robots.ts`
  points crawlers to the sitemap.
- Cite authoritative primary sources for changing platform rules, eligibility,
  and other time-sensitive claims. State when a requirement was checked, avoid
  promises of earnings or rankings, and recheck the official source before
  updating thresholds.
- Before launch, verify the live site in Google Search Console, inspect key
  URLs and sitemap processing, and review mobile usability and page speed. Do
  not submit deployments from this workspace unless explicitly requested.

## Primary references

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Search spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
