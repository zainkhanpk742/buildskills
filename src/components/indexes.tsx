import Link from "next/link";
import { guidesInArea, listedAreas } from "@/data/site";
import { AreaIcon } from "@/components/AreaIcon";
import { Arrow } from "@/components/ui";

export function AreaIndex() {
  return (
    <ul className="area-cards">
      {listedAreas.map((area) => {
        const count = guidesInArea(area.title).length;
        return (
          <li key={area.slug}>
            <Link href={`/learn/${area.slug}`} className="area-card">
              <span className="area-card-top">
                <span className="area-num"><AreaIcon slug={area.slug} /></span>
                <span className="area-count">{count} {count === 1 ? "guide" : "guides"}</span>
              </span>
              <span className="area-title">{area.question}</span>
              <span className="area-copy">{area.summary}</span>
              <span className="area-foot">
                <span>Explore {area.title}</span>
                <span className="area-arrow"><Arrow /></span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
