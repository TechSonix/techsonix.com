import ContactForm from "../../components/ContactForm";
import { site } from "../../lib/site";
export const metadata = {
  title: "Contact TechSonix",
  alternates: { canonical: "/support/" },
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
          Have a project in mind, a question about our services, or something
          that needs our attention? Start here.
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
            Tell us what you’re working on and where you need help. No account
            is needed to contact us.
          </p>
          {site.contactEmail && (
            <p>
              <a className="text-link" href={`mailto:${site.contactEmail}`}>
                {site.contactEmail}
              </a>
            </p>
          )}
          <div className="link-list">
            <a href="/services/">Explore our capabilities ↗</a>
            <a href="/privacy/">Website privacy policy ↗</a>
            <a href="/delete-data/">Request deletion of contact data ↗</a>
          </div>
          <div className="small-note">
            <strong>For project inquiries</strong>
            <p>
              Share the problem you want to solve, the work you have in mind,
              and any relevant timing. Please keep confidential credentials out
              of your message.
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
