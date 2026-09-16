import PolicyLayout, {
  type PolicySection,
} from "../../components/PolicyLayout";
import ContactForm from "../../components/ContactForm";
export const metadata = {
  title: "Community rules & content reports",
  alternates: { canonical: "/community/" },
};
const sections: PolicySection[] = [
  {
    id: "scope",
    title: "Scope and responsibility",
    content: (
      <>
        <p>
          These rules apply to contributions to services operated by TechSonix
          and to our decisions about content we host or promote. Independent
          xites and communities have their own operators and rules. Users remain
          responsible for what they publish, share, and do through EpixNet.
        </p>
        <p>
          TechSonix can take action within the services it controls. Publishing
          the browser does not give us the ability to remove all copies of a
          xite or control every participant in the network.
        </p>
      </>
    ),
  },
  {
    id: "rules",
    title: "What is not allowed",
    content: (
      <>
        <p>Do not publish, promote, request, or distribute:</p>
        <ul>
          <li>
            Child sexual abuse, exploitation, grooming, or sexual content
            involving minors.
          </li>
          <li>Non-consensual intimate material or threats to distribute it.</li>
          <li>
            Credible threats, targeted harassment, or content encouraging
            violence.
          </li>
          <li>Private personal information without authorization.</li>
          <li>
            Scams, impersonation intended to deceive, malware, or attempts to
            steal credentials.
          </li>
          <li>
            Content that infringes copyright or other rights, or that you are
            not authorized to distribute.
          </li>
          <li>Other unlawful content or activity.</li>
        </ul>
        <p>
          Respect creator licenses and the safety and privacy of other people. A
          “public domain” or Creative Commons label alone does not establish
          permission for every use or territory.
        </p>
      </>
    ),
  },
  {
    id: "report",
    title: "Make a private report",
    content: (
      <>
        <p>
          Use the form below and select “Content or copyright report.” You do
          not need an xID, EPIX, a wallet, or an app account. Include the xite
          address or content identifier, where the content appears, the reason
          for your concern, and enough context to locate it.
        </p>
        <p>
          For copyright concerns, identify the work and the use you believe is
          unauthorized, your relationship to the rights holder, and a way to
          contact you. Do not upload or reproduce illegal material. This form is
          not an emergency service; contact the appropriate emergency
          authorities if someone is in immediate danger.
        </p>
        <p>
          Some in-xite reports are publicly signed and replicated. This website
          form provides a separate private channel to TechSonix through our form
          and email service providers, as explained in the{" "}
          <a href="/privacy/#contact">privacy policy</a>.
        </p>
        <ContactForm topic="Content or copyright report" />
      </>
    ),
  },
  {
    id: "response",
    title: "Review, action, and appeals",
    content: (
      <>
        <p>
          We review reports concerning our services and identify the scope of
          action available to us. Actions may include removing a listing we
          control, restricting a contribution, addressing operator-hosted
          content, or referring an issue to the relevant independent operator. A
          local block changes your own experience; it does not delete content
          everywhere.
        </p>
        <p>
          Where appropriate, we may ask for more information and explain our
          decision. To request a review, use the{" "}
          <a href="/support/#contact">support form</a>, select “Moderation
          appeal,” and include the relevant decision or report identifier and
          your reason. Do not publish private complaint details in a public
          report.
        </p>
      </>
    ),
  },
];
export default function Community() {
  return (
    <PolicyLayout
      title="Community & reporting."
      intro="Clear rules, a private way to report concerns, and an honest explanation of what we can act on."
      sections={sections}
    />
  );
}
