import PolicyLayout, {
  type PolicySection,
} from "../../components/PolicyLayout";
import ContactForm from "../../components/ContactForm";
export const metadata = {
  title: "Request deletion of contact data",
  alternates: { canonical: "/delete-data/" },
};
const sections: PolicySection[] = [
  {
    id: "request",
    title: "Make a request",
    content: (
      <>
        <p>
          Use this form to request deletion of personal information you sent to
          TechSonix, Inc. through this company website or in related
          correspondence. Include the email address you used and enough context
          to identify the records.
        </p>
        <p>
          Do not send passwords, secret keys, or identity documents. No account
          or payment is needed to submit a request.
        </p>
        <ContactForm topic="Data deletion request" />
      </>
    ),
  },
  {
    id: "process",
    title: "How we handle requests",
    content: (
      <>
        <p>
          We identify relevant TechSonix-controlled records and may ask for
          proportionate verification. We delete applicable information, subject
          to legal retention requirements and other exceptions under applicable
          law.
        </p>
        <p>
          We explain what action was taken and any information retained for
          legal obligations, dispute resolution, or abuse prevention. See our{" "}
          <a href="/privacy/">website privacy policy</a> for the purposes for
          which correspondence is retained.
        </p>
      </>
    ),
  },
];
export default function DeleteData() {
  return (
    <PolicyLayout
      title="Delete your contact data."
      intro="Request removal of personal information sent to TechSonix through this company website."
      sections={sections}
    />
  );
}
