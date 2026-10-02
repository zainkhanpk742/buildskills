import { searchHits } from "@/data/site";

export const dynamic = "force-static";

/** Prebuilt search data, fetched by the homepage search box on first use. */
export function GET() {
  return Response.json(searchHits(), { headers: { "X-Robots-Tag": "noindex" } });
}
