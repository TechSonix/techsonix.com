import PolicyLayout, {
  type PolicySection,
} from "../../components/PolicyLayout";
import ContactForm from "../../components/ContactForm";
export const metadata = {
  title: "Request account & data deletion — EpixNet",
  alternates: { canonical: "/delete-data/" },
};
const sections: PolicySection[] = [
  {
    id: "request",
    title: "Request deletion from TechSonix",
    content: (
      <>
        <p>
          Use this page to request deletion of personal information or an
          account/profile controlled by TechSonix, Inc. in connection with
          EpixNet or this website. You can make the request without signing in,
          connecting a wallet, purchasing an xID, or making a payment.
        </p>
        <p>
          Include the email address you used to contact us, any relevant public
          account or profile identifier, and what you want removed. Only provide
          information needed to identify your records. Do not send a seed
          phrase, private key, wallet password, or identity document in this
          form.
        </p>
        <ContactForm topic="Data deletion request" />
      </>
    ),
  },
  {
    id: "process",
    title: "What happens next",
    content: (
      <ol>
        <li>
          We identify records held by TechSonix that relate to your request.
        </li>
        <li>
          Where necessary, we ask for proportionate verification before
          disclosing or deleting someone’s records. We never ask for wallet
          secrets.
        </li>
        <li>
          We delete applicable personal data we control, subject to legal
          retention requirements and other exceptions under applicable law.
        </li>
        <li>
          We explain the action taken, any information retained and why, or
          whether the record belongs to a different operator.
        </li>
      </ol>
    ),
  },
  {
    id: "scope",
    title: "What can and cannot be removed",
    content: (
      <>
        <p>
          <strong>TechSonix-controlled records:</strong> this can include
          contact-form submissions and support correspondence, and any
          applicable account/profile records in services TechSonix actually
          operates. Necessary records may be retained to meet legal obligations,
          resolve disputes, or address abuse. Our response will explain relevant
          exceptions.
        </p>
        <p>
          <strong>Independent services:</strong> a third-party xite account is
          managed by that xite’s operator. We can help identify the relevant
          operator when possible, but cannot represent that a request to
          TechSonix deletes a third party’s records.
        </p>
        <p>
          <strong>Public network records:</strong> blockchain history, xID
          registrations, signed posts, and copies retained by independent peers
          may remain available. We cannot erase those records across the
          network.
        </p>
      </>
    ),
  },
  {
    id: "device",
    title: "Local app and wallet data",
    content: (
      <>
        <p>
          Local device data is separate from TechSonix-held information. Back up
          recovery material you need before using app or operating-system
          controls to remove local wallet or application data. Removing the only
          copy of a wallet’s recovery information can permanently prevent access
          to funds.
        </p>
        <p>
          Unlinking an identity in EpixNet’s configuration is not account
          deletion: it can retain the identity key and previously published
          content. Removing a local wallet also does not erase chain records or
          a profile published elsewhere.
        </p>
        <p>
          Contact <a href="/support/">support</a> if you are unsure which
          operator or kind of record is involved.
        </p>
      </>
    ),
  },
];
export default function DeleteData() {
  return (
    <PolicyLayout
      title="Request data deletion."
      intro="A direct way to request removal of personal data controlled by TechSonix, Inc., with no wallet or payment required."
      sections={sections}
    />
  );
}
