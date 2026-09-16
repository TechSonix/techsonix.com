import ContactForm from "../../../components/ContactForm";
import { site } from "../../../lib/site";
export const metadata = {
  title: "Contact & EpixNet support",
  alternates: { canonical: "/epixnet/support/" },
};
export default function Support() {
  return (
    <>
      <section className="page-hero wrap">
        <p className="eyebrow">Contact TechSonix, Inc.</p>
        <h1>
          Let’s <span className="serif">talk.</span>
        </h1>
        <p className="lede">
          A project idea, an EpixNet question, or something that needs our
          attention. Start here.
        </p>
      </section>
      <section className="wrap detail-grid section-bottom" id="contact">
        <div>
          <h2>
            A direct line
            <br />
            to TechSonix.
          </h2>
          <p>
            No account, wallet connection, xID, or payment is needed to contact
            us.
          </p>
          {site.contactEmail && (
            <p>
              <a className="text-link" href={`mailto:${site.contactEmail}`}>
                {site.contactEmail}
              </a>
            </p>
          )}
          <div className="link-list">
            <a href="/epixnet/community/#report">
              Report content or copyright concerns ↗
            </a>
            <a href="/epixnet/delete-data/">
              Request account or data deletion ↗
            </a>
            <a href="/epixnet/privacy/">Read the privacy policy ↗</a>
          </div>
          <div className="small-note">
            <strong>For app support</strong>
            <p>
              Include your device, operating system, app version, and steps to
              reproduce the issue. Share only the log excerpts needed to explain
              it, with personal information removed.
            </p>
          </div>
        </div>
        <ContactForm
          topic="Product support"
          product
          privacyHref="/epixnet/privacy/#contact"
        />
      </section>
    </>
  );
}
