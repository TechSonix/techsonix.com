import PolicyLayout, {
  type PolicySection,
} from "../../components/PolicyLayout";
export const metadata = {
  title: "Privacy policy — EpixNet & TechSonix",
  alternates: { canonical: "/privacy/" },
};
const sections: PolicySection[] = [
  {
    id: "scope",
    title: "Who this policy covers",
    content: (
      <>
        <p>
          TechSonix, Inc. publishes EpixNet and operates techsonix.com. This
          policy explains how information is handled when you use our website,
          contact us, or use EpixNet. Contact us through our{" "}
          <a href="/support/#contact">support form</a> and select “Privacy
          request.”
        </p>
        <p>
          EpixNet can connect to independent websites, peer-hosted websites
          called xites, blockchain networks, and third-party wallet services.
          Those operators handle the information they receive under their own
          policies. Publishing the EpixNet application does not make TechSonix
          the operator of every destination reachable through it.
        </p>
      </>
    ),
  },
  {
    id: "website",
    title: "Visiting this website",
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
          external fonts, or social-media widgets on this website. A link to
          another website opens that service; its own privacy practices apply.
          This statement about the company website does not describe every xite
          or external service you may visit in EpixNet.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Messages and support requests",
    content: (
      <>
        <p>
          When you submit a form, we receive your email address, the optional
          name you provide, your selected topic, and your message. Include only
          information needed to resolve the request. Never send recovery
          phrases, private keys, wallet passwords, or copies of illegal
          material.
        </p>
        <p>
          Our forms use Web3Forms to process and deliver messages to TechSonix.
          Web3Forms and its delivery and anti-spam providers can process your
          submission and technical information such as your IP address. See{" "}
          <a href="https://web3forms.com/privacy">Web3Forms’ privacy policy</a>{" "}
          for its processing, international transfers, and retention. Messages
          delivered to our inbox are also processed by our email provider.
        </p>
        <p>
          We use this information to answer inquiries, provide support,
          investigate safety or copyright reports, handle privacy requests, and
          keep necessary records of those actions. Submitting a request does not
          subscribe you to marketing. We may share information with service
          providers helping us handle it, or where reasonably necessary to
          comply with law, protect rights, or address abuse.
        </p>
      </>
    ),
  },
  {
    id: "device",
    title: "Information on your device",
    content: (
      <>
        <p>
          EpixNet stores application settings, downloaded xite data, network
          state, browser data, identity material, and wallet preferences on your
          device as needed for the features you use. Local diagnostic logs may
          contain network or error details. If you choose to share a log excerpt
          for support, that excerpt becomes part of your support request.
        </p>
        <p>
          The integrated wallet stores an encrypted software-wallet vault
          locally. Hardware-wallet secrets remain subject to that device’s
          design. TechSonix support cannot recover a lost recovery phrase or
          reverse a blockchain transaction. Back up your recovery information
          before removing wallet data or the application.
        </p>
        <p>
          Deleting local data affects the copies on that device. It does not
          erase data already published to a blockchain, received by a
          third-party service, or replicated by independent peers.
        </p>
      </>
    ),
  },
  {
    id: "network",
    title: "Peer networking and browsing",
    content: (
      <>
        <p>
          EpixNet connects to peers, bootstrap and transport services, visited
          websites, and selected network services. Requests can disclose xite
          addresses, URLs or resource identifiers, timing, and connection
          metadata to the recipients needed to provide the service. A direct
          connection can disclose your IP address.
        </p>
        <p>
          The app can download and store xite content and serve it to other
          peers. Opening a xite may therefore involve sharing downloaded
          content, not just retrieving a page. Device settings, platform
          support, and network configuration affect this behavior. Tor or other
          routing options change who receives connection information; they do
          not guarantee anonymity.
        </p>
        <p>
          Websites and xites you visit may use their own cookies, local storage,
          analytics, accounts, or embedded services. Review those destinations’
          policies before entering personal information. TechSonix’s application
          policies do not replace them.
        </p>
      </>
    ),
  },
  {
    id: "public",
    title: "Public content and blockchain records",
    content: (
      <>
        <p>
          Content you publish can be public, signed with an identifier, and
          independently replicated. This includes posts, profiles, directory
          contributions, and public moderation reports. Avoid putting
          confidential information in public fields.
        </p>
        <p>
          Blockchain addresses, xID names, registrations, transfers, and
          transactions can be public and persistent. These records may be
          linkable to other activity using the same address. Removing a local
          identity, clearing browser data, or deleting a wallet does not erase
          blockchain history or other people’s copies.
        </p>
      </>
    ),
  },
  {
    id: "wallet",
    title: "Wallet connections and other services",
    content: (
      <>
        <p>
          Wallet features communicate with selected blockchain RPC endpoints and
          other services to retrieve balances and network data, estimate fees,
          obtain prices, check suspicious destinations, or submit a transaction
          you approve. Depending on the feature, the recipient can receive a
          public wallet address, asset identifiers, transaction details, a
          signed transaction, and connection metadata.
        </p>
        <p>
          Price and security features may use providers such as CoinGecko and
          phishing-list services. The endpoints depend on the network, release,
          and enabled feature. Connected applications receive information
          allowed by the connection and requests you approve. They may retain
          information already received after you disconnect.
        </p>
        <p>
          TechSonix’s mobile build configuration does not enable the wallet’s
          optional analytics service. Third-party websites, RPC services, and
          other integrations can still process their own request and usage data.
          A change to TechSonix’s own collection practices will require an
          updated disclosure and any permission required by law or the platform.
        </p>
      </>
    ),
  },
  {
    id: "permissions",
    title: "Device permissions",
    content: (
      <>
        <p>
          Supported wallet flows may request camera access to scan QR codes,
          including hardware-wallet interactions. Enabled nearby-network or mesh
          features may require local-network or Bluetooth permissions, depending
          on the platform.
        </p>
        <p>
          You can deny or revoke permissions in your device settings. The
          associated feature may then be unavailable. Granting a camera or
          nearby-network permission is not permission to share wallet recovery
          information.
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
          Device data remains until removed by app controls, operating-system
          controls, or the relevant storage lifecycle. Independent peers,
          websites, blockchain networks, and service providers determine the
          retention of data they receive.
        </p>
        <p>
          TechSonix retains support and complaint records for as long as
          reasonably needed to respond, resolve related issues, prevent abuse,
          meet legal obligations, or establish and defend legal claims. We limit
          retained information to those purposes. A deletion response will
          explain any applicable retention exception; we do not promise to erase
          records that law requires us to retain.
        </p>
        <p>
          We use HTTPS for this website and form delivery and restrict the use
          of support information to the purposes described here. Local wallet
          encryption and device protections help protect stored data, but no
          device, service, or transmission can be guaranteed completely secure.
          Public and replicated content should not be treated as confidential.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your choices and requests",
    content: (
      <>
        <p>
          Use our <a href="/delete-data/">data-deletion page</a> to request
          removal of personal data controlled by TechSonix. You can also contact
          us to request access, correction, a copy of information, or other
          privacy rights available under the law that applies to you. You may
          have rights to object to or restrict processing and to complain to a
          relevant data-protection authority.
        </p>
        <p>
          We may need proportionate information to verify that a request
          concerns your data. We will not ask for a recovery phrase or private
          key. Our response will identify what we can act on, what belongs to a
          different operator, and any records we must retain.
        </p>
        <p>
          Service providers and network participants can be located in different
          countries, whose laws may differ from yours. We use providers to
          deliver the services described here and apply legal safeguards where
          required. If you believe a child has provided personal information to
          TechSonix that should be removed, contact us through the same request
          channel.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Policy updates",
    content: (
      <p>
        We update this policy when our services or data practices change and
        show the revision date above. Where required, we will provide additional
        notice or obtain permission before a material change takes effect.
        Contact <a href="/support/#contact">TechSonix support</a> with questions
        about this policy.
      </p>
    ),
  },
];
export default function Privacy() {
  return (
    <PolicyLayout
      title="Privacy policy."
      intro="How information is handled by TechSonix, the EpixNet application, and the services you connect to."
      sections={sections}
    />
  );
}
