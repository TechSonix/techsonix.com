import PolicyLayout, {
  type PolicySection,
} from "../../components/PolicyLayout";
export const metadata = {
  title: "Website terms of use",
  alternates: { canonical: "/terms/" },
};
const sections: PolicySection[] = [
  {
    id: "scope",
    title: "Using this website",
    content: (
      <>
        <p>
          This website is provided by TechSonix, Inc. to describe our company
          and services and to receive inquiries. These terms concern this
          website. Development work and other services are subject to the
          agreements and terms applicable to those services.
        </p>
        <p>
          Sending an inquiry does not create a development contract or commit
          either party to a project. Scope, fees, delivery, confidentiality, and
          other project terms must be agreed separately.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "Responsible use",
    content: (
      <p>
        Use the website lawfully. Do not attempt to compromise its security,
        disrupt its operation, submit fraudulent messages, distribute malware,
        or infringe other people’s rights. Do not include confidential
        credentials or illegal material in contact forms.
      </p>
    ),
  },
  {
    id: "materials",
    title: "Website materials",
    content: (
      <>
        <p>
          TechSonix’s names, logos, website copy, and other materials remain
          protected by applicable intellectual-property rights. No ownership of
          those materials is transferred by visiting this website.
        </p>
        <p>
          Links to independent services are provided for information. Those
          services operate under their own terms and privacy policies.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Availability and liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, the website is
          provided “as is” and “as available,” without a guarantee of
          uninterrupted availability or suitability for a particular purpose.
          Information may be updated as our services change.
        </p>
        <p>
          To the fullest extent permitted by applicable law, TechSonix is not
          liable for indirect or consequential losses arising from use of this
          website. These terms do not exclude or limit liability that cannot
          lawfully be excluded or limited, including mandatory consumer rights
          or responsibility for TechSonix’s own conduct where the law requires
          it.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Questions and updates",
    content: (
      <p>
        Contact <a href="/support/">TechSonix, Inc.</a> with questions about
        this website or these terms. We show the revision date above when terms
        change. See our <a href="/privacy/">website privacy policy</a> for
        information about personal data.
      </p>
    ),
  },
];
export default function Terms() {
  return (
    <PolicyLayout
      title="Website terms of use."
      intro="Information about using the TechSonix company website and contacting us about our services."
      sections={sections}
    />
  );
}
