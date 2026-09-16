import NetworkArt from "../components/NetworkArt";
import { services } from "../lib/site";
export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-line" /> Independent thinking. Connected
            technology.
          </p>
          <h1>
            Good software.
            <br />
            Greater <span className="serif">possibilities.</span>
          </h1>
          <p className="lede">
            We build web experiences, blockchain applications, and the systems
            that connect them. Thoughtfully engineered. Made to be used.
          </p>
          <div className="button-row">
            <a className="button" href="/services/">
              Explore what we do <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="/epixnet/">
              Meet EpixNet <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="hero-footnote">
            TECHSONIX, INC. <span>SOFTWARE / SYSTEMS / OPEN NETWORKS</span>
          </p>
        </div>
        <NetworkArt />
      </section>
      <div className="capability-strip">
        <div className="wrap">
          <span>From an idea to a working product.</span>
          <span>Web development</span>
          <span>Blockchain engineering</span>
          <span>Systems integration</span>
        </div>
      </div>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / What we do</p>
            <h2>
              Complex technology.
              <br />
              Clear experiences.
            </h2>
          </div>
          <p>
            Every product has different moving parts.
            <br />
            We help them work together.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <a
              className="service-card"
              key={service.slug}
              href={`/services/${service.slug}/`}
            >
              <div className="card-top">
                <span className="mono">/{service.number}</span>
                <span className="circle-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span className="card-link">
                Learn more <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="product-feature">
        <div className="wrap feature-grid">
          <div>
            <p className="eyebrow">02 / Built by us</p>
            <div className="product-wordmark">
              EpixNet<span>↗</span>
            </div>
            <p className="feature-tagline">
              A different way
              <br />
              to explore the web.
            </p>
          </div>
          <div className="feature-copy">
            <span className="pill">Browser · Peer network · Wallet</span>
            <h2>
              Explore an open,
              <br />
              connected network.
            </h2>
            <p>
              EpixNet brings browsing, peer-hosted xites, and wallet connections
              into one application. TechSonix is the app’s publisher;
              independent communities create their own destinations.
            </p>
            <a className="button button-light" href="/epixnet/">
              Get to know EpixNet <span aria-hidden="true">↗</span>
            </a>
            <a
              className="subtle-link"
              href="https://github.com/EpixZone/EpixNet"
            >
              Explore the source on GitHub ↗
            </a>
          </div>
        </div>
      </section>
      <section className="section wrap approach">
        <div>
          <p className="eyebrow">03 / How we think</p>
          <h2>
            Useful from the
            <br />
            first interaction.
          </h2>
          <a className="text-link" href="/about/">
            More about TechSonix ↗
          </a>
        </div>
        <div className="principle-list">
          <div>
            <span>01</span>
            <div>
              <h3>Start with the purpose.</h3>
              <p>
                Understand what people need before deciding how to build it.
              </p>
            </div>
          </div>
          <div>
            <span>02</span>
            <div>
              <h3>Connect the whole system.</h3>
              <p>
                Consider the interface, the data, and the infrastructure
                together.
              </p>
            </div>
          </div>
          <div>
            <span>03</span>
            <div>
              <h3>Keep it understandable.</h3>
              <p>Make behavior clear and give people useful choices.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap cta">
        <p className="eyebrow">Have something in mind?</p>
        <div>
          <h2>Let’s make it work.</h2>
          <a className="button" href="/support/#contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
