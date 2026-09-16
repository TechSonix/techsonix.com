import PolicyLayout, {
  type PolicySection,
} from "../../components/PolicyLayout";
export const metadata = {
  title: "Website privacy policy",
  alternates: { canonical: "/privacy/" },
};
const sections: PolicySection[] = [
  {
    id: "scope",
    title: "About this policy",
    content: (
      <>
        <p>
          TechSonix, Inc. operates techsonix.com. This policy covers visits to
          this company website and messages sent through its contact forms. It
          explains the information involved, why it is used, and how to make a
          privacy request.
        </p>
        <p>
          Contact us through the <a href="/support/#contact">contact form</a>{" "}
          and select “Privacy request.” Separate agreements and disclosures
          apply to work commissioned from TechSonix and to services with their
          own policies.
        </p>
      </>
    ),
  },
  {
    id: "website",
    title: "Website hosting",
    content: (
      <>
        <p>
          This website is hosted on GitHub Pages. Your browser sends GitHub the
          connection information needed to serve pages, including your IP
          address, requested URL, and browser information. GitHub processes
          hosting and security information under its{" "}
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
            privacy statement
          </a>
          .
        </p>
        <p>
          TechSonix does not embed advertising pixels, audience analytics,
          external fonts, or social-media widgets on this website. Links to
          other websites take you to services with their own privacy practices.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact information and messages",
    content: (
      <>
        <p>
          When you submit a form, we receive your email address, optional name,
          selected topic, and message. We use these details to respond, discuss
          potential projects, provide assistance, handle privacy requests, and
          maintain necessary records. Submitting a request does not subscribe
          you to marketing.
        </p>
        <p>
          Forms use Web3Forms to process and deliver your message to TechSonix.
          Web3Forms and its delivery and anti-spam providers can process the
          submission and technical information such as your IP address. See{" "}
          <a href="https://web3forms.com/privacy">Web3Forms’ privacy policy</a>{" "}
          for its processing, international transfers, and retention. Our email
          provider processes messages delivered to our inbox.
        </p>
        <p>
          Provide only information needed for your request. Do not send
          passwords, secret keys, confidential credentials, identity documents,
          or illegal material through the form. We may share information with
          providers helping us respond, or where reasonably necessary to comply
          with law, protect rights, or address abuse.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Retention and security",
    content: (
      <>
        <p>
          TechSonix retains correspondence for as long as reasonably needed to
          answer the request, perform agreed work, resolve related issues,
          prevent abuse, meet legal obligations, or establish and defend legal
          claims. We limit retained information to those purposes.
        </p>
        <p>
          We use HTTPS for this website and form delivery. We restrict use of
          correspondence to the purposes described here. No service or
          transmission can be guaranteed completely secure.
        </p>
        <p>
          Hosting, form, and email providers may process information in other
          countries. Their retention and processing practices are described in
          their policies, and applicable legal safeguards remain required for
          our use of these services.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Privacy and deletion requests",
    content: (
      <>
        <p>
          You can request access, correction, a copy, or deletion of personal
          information held by TechSonix through our{" "}
          <a href="/support/#contact">contact form</a> or{" "}
          <a href="/delete-data/">deletion request page</a>. Depending on
          applicable law, you may also have rights to object to or restrict
          processing, and to complain to a relevant data-protection authority.
        </p>
        <p>
          We may ask for proportionate information to verify your request. Our
          response will explain what action we can take and any necessary
          retention exception. If you believe a child has provided information
          that should be removed, use the same contact channel.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Updates",
    content: (
      <p>
        We update this policy when our website or practices change and show the
        revision date above. Where required, we will provide additional notice
        or obtain permission for material changes.
      </p>
    ),
  },
];
export default function Privacy() {
  return (
    <PolicyLayout
      title="Website privacy policy."
      intro="How TechSonix, Inc. handles visits to this website and the information you send us."
      sections={sections}
    />
  );
}
