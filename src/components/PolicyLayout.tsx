import type { ReactNode } from "react";
import { site } from "../lib/site";
export type PolicySection = { id: string; title: string; content: ReactNode };
export default function PolicyLayout({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: PolicySection[];
}) {
  return (
    <>
      <section className="page-hero wrap policy-hero">
        <a className="back-link" href="/epixnet/">
          ← EpixNet
        </a>
        <p className="eyebrow">TechSonix, Inc. / Legal & support</p>
        <h1>{title}</h1>
        <p className="lede">{intro}</p>
        <p className="meta">Last updated {site.updated}</p>
      </section>
      <div className="wrap policy-grid">
        <aside className="policy-nav">
          <p className="eyebrow">On this page</p>
          <nav aria-label="On this page">
            {sections.map((section, index) => (
              <a href={`#${section.id}`} key={section.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.title}
              </a>
            ))}
          </nav>
          <a className="text-link" href="/support/">
            Need help? Contact us ↗
          </a>
        </aside>
        <article className="policy-content">
          {sections.map((section) => (
            <section id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              {section.content}
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
