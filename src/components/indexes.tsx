import Link from "next/link";
import { areas, services } from "@/data/site";
import { Arrow } from "@/components/ui";

export function AreaIndex() {
  return (
    <ol className="index-list" style={{ borderTop: "1px solid var(--line)" }}>
      {areas.map((area, index) => (
        <li key={area.slug}>
          <Link href={`/learn/${area.slug}`} className="index-row">
            <span className="num tabular">{String(index + 1).padStart(2, "0")}</span>
            <span>
              <span className="title" style={{ display: "block", fontSize: "1.15rem" }}>
                {area.title}
              </span>
              <span className="meta" style={{ display: "block", marginTop: "0.25rem" }}>
                {area.summary}
              </span>
            </span>
            <Arrow />
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function ServiceIndex({ dark = false }: { dark?: boolean }) {
  return (
    <ol className="services">
      {services.map((service, index) => (
        <li key={service.id} id={dark ? undefined : service.id} style={{ scrollMarginTop: "6rem" }}>
          <Link href={`/services#${service.id}`} className="service-row">
            <span className="num tabular">{String(index + 1).padStart(2, "0")}</span>
            <span>
              <span className="title" style={{ display: "block", fontSize: "1.125rem" }}>
                {service.title}
              </span>
              <span className="meta" style={{ display: "block", marginTop: "0.25rem", color: dark ? "var(--on-dark-muted)" : "var(--muted)" }}>
                {service.summary}
              </span>
            </span>
            <Arrow />
          </Link>
        </li>
      ))}
    </ol>
  );
}
