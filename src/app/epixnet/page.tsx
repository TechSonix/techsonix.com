import NetworkArt from "../../components/NetworkArt";
export const metadata = {
  title: "EpixNet",
  description:
    "Explore peer-hosted xites, open networks, and wallet connections with EpixNet, published by TechSonix, Inc.",
  alternates: { canonical: "/epixnet/" },
};
export default function EpixNet() {
  return (
    <>
      <section className="wrap hero product-hero">
        <div>
          <p className="eyebrow">Published by TechSonix, Inc.</p>
          <h1>
            A web of
            <br />
            <span className="serif">possibilities.</span>
          </h1>
          <p className="lede">
            EpixNet combines a browser, a peer network node, and an integrated
            wallet. Explore xites, connect to communities, and choose how you
            participate.
          </p>
          <div className="button-row">
            <a href="https://github.com/EpixZone/EpixNet" className="button">
              Explore the project ↗
            </a>
            <a href="/epixnet/support/" className="text-link">
              Get support →
            </a>
          </div>
          <p className="meta">
            Mobile store releases are in preparation. Availability and features
            vary by platform.
          </p>
        </div>
        <NetworkArt compact />
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Inside EpixNet</p>
            <h2>
              One application.
              <br />
              Connected experiences.
            </h2>
          </div>
        </div>
        <div className="service-grid">
          {[
            [
              "Browse xites",
              "Open peer-hosted websites, use the dashboard, or navigate to a destination yourself. Independent xites are created and operated by their communities.",
            ],
            [
              "Connect your wallet",
              "Use an integrated wallet to connect to compatible experiences. Review permissions and transactions before approving them.",
            ],
            [
              "Participate in a network",
              "Your app can store downloaded xite data and share it with peers. Network activity and routing depend on your settings and platform.",
            ],
          ].map(([title, body], i) => (
            <div className="service-card static-card" key={title}>
              <span className="mono">/0{i + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="muted-section">
        <div className="wrap detail-grid">
          <div>
            <p className="eyebrow">Your activity. Your choices.</p>
            <h2>
              Know what
              <br />
              you’re connecting to.
            </h2>
            <p>
              TechSonix publishes the application. Users and independent
              operators are responsible for their own content and services. A
              link, search result, or wallet connection is not an endorsement.
            </p>
            <a href="/epixnet/terms/" className="text-link">
              Read the terms →
            </a>
          </div>
          <div className="principle-list">
            <div>
              <span>01</span>
              <div>
                <h3>Keep recovery information private.</h3>
                <p>
                  TechSonix support never needs your seed phrase, private key,
                  or wallet password.
                </p>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <h3>Understand public records.</h3>
                <p>
                  Published content can be replicated by peers. Blockchain
                  activity can remain public after local data is removed.
                </p>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <h3>Report problems directly.</h3>
                <p>
                  Contact support or report content without buying EPIX,
                  registering an xID, or connecting a wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <p className="eyebrow">Help & information</p>
        <div className="resource-grid">
          {[
            [
              "/epixnet/privacy/",
              "Privacy policy",
              "Understand data, peers, and third-party services.",
            ],
            [
              "/epixnet/terms/",
              "Terms of use",
              "Your responsibilities and the scope of our services.",
            ],
            [
              "/epixnet/community/",
              "Community & reporting",
              "Content rules, private reports, and appeals.",
            ],
            [
              "/epixnet/delete-data/",
              "Data deletion",
              "Request removal of data controlled by TechSonix.",
            ],
          ].map(([href, title, body]) => (
            <a href={href} key={href}>
              <h3>
                {title}
                <span aria-hidden="true">↗</span>
              </h3>
              <p>{body}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
