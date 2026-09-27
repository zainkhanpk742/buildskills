import Link from "next/link";
import { areas, guidesInArea, services } from "@/data/site";
import { Arrow } from "@/components/ui";

export function AreaIndex() {
  return (
    <ul className="area-cards">
      {areas.map((area, index) => {
        const count = guidesInArea(area.title).length;
        const countLabel = count === 0 ? "Guides in progress" : count === 1 ? "1 guide" : `${count} guides`;
        return (
          <li key={area.slug}>
            <Link href={`/learn/${area.slug}`} className="area-card">
              <span className="area-num">{String(index + 1).padStart(2, "0")}</span>
              <span className="chip">{area.title}</span>
              <span className="area-title">{area.question}</span>
              <span className="area-copy">{area.summary}</span>
              <span className="area-foot">
                <span>{countLabel}</span>
                <Arrow />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function ServiceIndex() {
  return (
    <ul className="svc-grid">
      {services.map((service, index) => (
        <li key={service.id} id={service.id} className="svc">
          <span className="area-num">{String(index + 1).padStart(2, "0")}</span>
          <h3>
            <Link href={`/services#${service.id}`}>{service.title}</Link>
          </h3>
          <p>{service.summary}</p>
          <Link href="/contact" className="text-link">
            Start a project <Arrow />
          </Link>
        </li>
      ))}
    </ul>
  );
}
