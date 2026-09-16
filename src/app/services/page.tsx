import { services } from "../../lib/site";
export const metadata = {
  title: "What we do",
  alternates: { canonical: "/services/" },
};
export default function Services() {
  return (
    <>
      <section className="page-hero wrap">
        <p className="eyebrow">Our capabilities</p>
        <h1>
          From the interface
          <br />
          to the <span className="serif">infrastructure.</span>
        </h1>
        <p className="lede">
          Software development that connects the details to the bigger picture.
        </p>
      </section>
      <section className="wrap service-rows">
        {services.map((service) => (
          <a href={`/services/${service.slug}/`} key={service.slug}>
            <span className="mono">/{service.number}</span>
            <div>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
            <span className="circle-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </section>
      <section className="wrap cta">
        <p className="eyebrow">Not sure where to start?</p>
        <div>
          <h2>Tell us what you’re building.</h2>
          <a className="button" href="/support/#contact">
            Let’s talk ↗
          </a>
        </div>
      </section>
    </>
  );
}
