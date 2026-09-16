import { notFound } from "next/navigation";
import { services } from "../../../lib/site";
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return {
    title: service?.name,
    description: service?.description,
    alternates: { canonical: `/services/${slug}/` },
  };
}
export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return (
    <>
      <section className="page-hero wrap">
        <a className="back-link" href="/services/">
          ← All services
        </a>
        <p className="eyebrow">Capability / {service.number}</p>
        <h1>
          {service.name}
          <span className="brand-dot">.</span>
        </h1>
        <p className="lede">{service.short}</p>
      </section>
      <section className="wrap detail-grid section-bottom">
        <div>
          <p className="large-copy">{service.detail}</p>
          <a href="/support/#contact" className="button">
            Discuss a project ↗
          </a>
        </div>
        <div className="deliverables">
          <p className="eyebrow">What we can help with</p>
          {service.deliverables.map((item) => (
            <div key={item}>
              <span aria-hidden="true">↗</span>
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
