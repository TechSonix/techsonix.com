export const metadata = {
  title: "Company",
  alternates: { canonical: "/about/" },
};
export default function About() {
  return (
    <>
      <section className="page-hero wrap">
        <p className="eyebrow">About TechSonix, Inc.</p>
        <h1>
          Independent thinking.
          <br />
          <span className="serif">Practical software.</span>
        </h1>
        <p className="lede">
          TechSonix develops web applications, blockchain software, and
          integrated systems. We also publish EpixNet, an application for
          exploring peer-hosted xites and connecting to open networks.
        </p>
      </section>
      <section className="wrap detail-grid section-bottom">
        <div>
          <h2>
            Technology with
            <br />a clear purpose.
          </h2>
          <p>
            We approach software as a complete experience: the interface people
            use, the services behind it, and the connections that make it
            useful.
          </p>
          <a href="/services/" className="text-link">
            Explore our capabilities ↗
          </a>
        </div>
        <div className="info-panel">
          <p className="eyebrow">Company information</p>
          <h3>TechSonix, Inc.</h3>
          <p>Software development & application publishing.</p>
          <div className="link-list">
            <a href="/epixnet/">EpixNet product information ↗</a>
            <a href="/support/">Business inquiries & support ↗</a>
            <a href="https://github.com/TechSonix">TechSonix on GitHub ↗</a>
            <a href="/privacy/">Privacy & data information ↗</a>
          </div>
        </div>
      </section>
    </>
  );
}
