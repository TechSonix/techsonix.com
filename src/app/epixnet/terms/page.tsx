import PolicyLayout, {
  type PolicySection,
} from "../../../components/EpixPolicyLayout";
export const metadata = {
  title: "Terms of use — EpixNet & TechSonix",
  alternates: { canonical: "/epixnet/terms/" },
};
const sections: PolicySection[] = [
  {
    id: "scope",
    title: "TechSonix’s role",
    content: (
      <>
        <p>
          These terms govern use of the TechSonix website and EpixNet services
          provided by TechSonix, Inc. Separate agreements for development work,
          app-store terms, and applicable open-source licenses continue to apply
          to their respective subjects.
        </p>
        <p>
          Please read the <a href="#responsibility">user responsibilities</a>,{" "}
          <a href="#wallet-losses">wallet-loss provisions</a>,{" "}
          <a href="#indemnity">reimbursement obligations</a>, and{" "}
          <a href="#liability">liability limitations</a>. They explain the risks
          you accept and when your conduct can make you responsible for losses.
        </p>
        <p>
          TechSonix publishes EpixNet as software that lets people browse and
          interact with networks. Users, xite authors, peer operators, and other
          third parties are responsible for their own content, services, and
          conduct. TechSonix does not operate, approve, or guarantee every
          website, xite, transaction, or network participant reachable through
          the application.
        </p>
        <p>
          A listing, search result, link, or technical ability to connect does
          not represent an endorsement or authorization to use another person’s
          content.
        </p>
      </>
    ),
  },
  {
    id: "responsibility",
    title: "Your responsibilities",
    content: (
      <>
        <p>
          You are responsible for your use of the application, your devices and
          credentials, the content you publish or distribute, the permissions
          you grant, and transactions you authorize. Use the services only where
          permitted by applicable law and only if you are legally able to agree
          to the relevant terms, with a parent or guardian’s involvement where
          legally required.
        </p>
        <p>
          You choose the destinations you visit, the people and services you
          transact with, and the content you access or share. You are
          responsible for your own decisions and for actions you authorize
          another person or application to take on your behalf. Using EpixNet
          does not transfer those responsibilities to TechSonix.
        </p>
        <p>
          Obtain the rights and permissions needed for content you access, copy,
          publish, or share. Respect creators’ licenses, other people’s privacy,
          and the <a href="/epixnet/community/">community rules</a>. Do not use
          the services to exploit children, distribute unlawful intimate
          material, threaten or harass others, commit fraud, distribute malware,
          infringe rights, or interfere with the security of other systems.
        </p>
        <p>
          Participating in a peer network may share downloaded content with
          others. You are responsible for understanding the relevant settings
          and using that capability lawfully.
        </p>
      </>
    ),
  },
  {
    id: "wallet",
    title: "Wallets and transactions",
    content: (
      <>
        <p>
          EpixNet’s integrated wallet is non-custodial. TechSonix provides
          wallet software; it does not take custody of your private keys or
          assets, operate a custodial account for you, or authorize transactions
          on your behalf. You control your keys and decide which connections,
          permissions, and transactions to authorize.
        </p>
        <p>
          As the wallet provider, TechSonix has no custodial authority to move
          or freeze your assets, recover missing private keys or recovery
          phrases, or reverse confirmed blockchain transactions. Independent
          networks, token issuers, and services may have their own rules and
          controls; a non-custodial wallet does not remove those third-party
          risks.
        </p>
        <p>
          You are responsible for protecting your device, passwords, private
          keys, and recovery information, and for keeping usable backups. Losing
          or disclosing that information can cause permanent loss of access to
          assets.
        </p>
        <p>
          Check the destination, network, asset, amount, any required memo or
          destination tag, fees, and requested permissions before approving a
          wallet action. TechSonix support never needs your seed phrase, private
          key, or wallet password.
        </p>
        <p>
          Blockchain transactions can be irreversible. Network fees, asset
          values, service availability, and third-party behavior can change.
          TechSonix does not guarantee recovery of lost keys, reversal of a
          transaction, an asset’s value, or the conduct of a connected
          application. Product information is not investment, tax, or financial
          advice.
        </p>
        <p>
          Independent services may impose their own fees and terms. A software
          connection does not mean TechSonix is a party to your transaction. You
          are responsible for the network and third-party fees associated with
          transactions you authorize. Estimated fees can differ from final
          charges, and a failed transaction may still incur a network fee.
        </p>
        <p>
          Displayed balances, prices, fee estimates, and security information
          may be delayed, incomplete, or inaccurate. Supporting an asset or
          network does not certify its safety, legitimacy, or value. A security
          check or the absence of a warning does not guarantee that a site,
          asset, transaction, or approval is safe. Review wallet requests and
          make your own decision before authorizing them.
        </p>
      </>
    ),
  },
  {
    id: "wallet-losses",
    title: "Wallet losses and third-party risks",
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, TechSonix is not
          liable for loss of funds, digital assets, or access resulting from:
        </p>
        <ul>
          <li>
            Lost, forgotten, deleted, exposed, or stolen recovery information,
            private keys, passwords, or backups; or compromise of your device.
          </li>
          <li>
            Transfers to an incorrect address or network, incorrect amounts,
            missing or incorrect required memos or destination tags, unsupported
            assets, or permissions and transactions you authorize.
          </li>
          <li>
            Phishing, impersonation, scams, malicious approvals, or a connected
            application’s misuse of permissions or assets.
          </li>
          <li>
            Failures, vulnerabilities, outages, or misconduct of independent
            blockchains, smart contracts, validators, RPC providers, bridges,
            exchanges, hardware wallets, or other third-party services.
          </li>
          <li>
            Asset-price changes, loss of liquidity, network fees, transaction
            delays, or changes to an independent network or protocol.
          </li>
        </ul>
        <p>
          TechSonix does not insure wallet balances, guarantee asset values or
          transaction outcomes, or promise to replace lost funds merely because
          you used EpixNet. Any obligation expressly agreed by TechSonix or
          imposed by applicable law remains in effect.
        </p>
        <p>
          These provisions are subject to the mandatory-rights exceptions in the{" "}
          <a href="#liability">liability limitations</a> below.
        </p>
      </>
    ),
  },
  {
    id: "content",
    title: "Browsing, content, and independent services",
    content: (
      <>
        <p>
          EpixNet’s built-in browser lets you visit websites, xites, and
          decentralized applications (dApps). A destination operated
          independently of TechSonix remains a third-party service when
          displayed inside EpixNet or connected to its wallet. Its operator’s
          terms, privacy practices, and fees apply to your dealings with it.
          Access through EpixNet does not make TechSonix that operator or a
          party to your agreement with it.
        </p>
        <p>
          You retain your rights in content you create, subject to rights held
          by others and any licenses you choose. Publishing to a decentralized
          network makes content available for the network to store and
          replicate. Do not publish content you lack permission to share or
          information you need to keep private.
        </p>
        <p>
          TechSonix may review reports and restrict listings, access, or content
          within services it actually controls, consistent with applicable law.
          We cannot promise removal from independent peers, third-party
          websites, or blockchain history. Submit concerns through our{" "}
          <a href="/epixnet/community/#report">private reporting channel</a>;
          identify the content without sending copies of illegal material.
        </p>
        <p>
          You are responsible for deciding whether to use an independent service
          and for reviewing its terms, privacy practices, and requests.
          TechSonix is not responsible for a third party’s conduct merely
          because its service can be reached through EpixNet, except to the
          extent applicable law provides otherwise.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Claims caused by your conduct (indemnity)",
    content: (
      <>
        <p>
          You agree to indemnify TechSonix, Inc., meaning reimburse it for
          covered losses and reasonable legal expenses, for third-party claims
          to the extent caused by:
        </p>
        <ul>
          <li>Your material breach of these terms.</li>
          <li>
            Your unlawful conduct, fraud, or intentional misuse of EpixNet.
          </li>
          <li>
            Your infringement of another person’s intellectual-property,
            privacy, or other legal rights, including through content you
            publish or distribute or services you operate.
          </li>
        </ul>
        <p>
          Covered losses are damages payable under a final judgment or a
          settlement you approve in writing, together with reasonable,
          documented legal expenses actually incurred in handling the covered
          claim. The obligation is limited to the portion caused by your conduct
          described above. It does not cover losses caused by TechSonix’s breach
          of these terms, negligence, fraud, or other misconduct, or another
          person’s independent wrongdoing.
        </p>
        <p>
          TechSonix will promptly notify you of a claim for which it seeks
          reimbursement, provide reasonable information about it, and give you a
          reasonable opportunity to participate in its defense. We will take
          reasonable steps to limit losses. Delayed notice reduces your
          obligation to the extent it materially harms your ability to defend
          the claim. Neither party may agree to a settlement imposing payment,
          an admission, or another obligation on the other without that party’s
          written consent, which must not be unreasonably withheld.
        </p>
        <p>
          This section does not require you to reimburse TechSonix merely for
          using EpixNet, bringing a complaint against us, or exercising your
          legal rights. It applies only where permitted by applicable law and is
          subject to the <a href="#liability">exceptions below</a>.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    title: "Availability and software licenses",
    content: (
      <>
        <p>
          Features vary by platform and release. Networks, peer-hosted content,
          and third-party services may be unavailable, delayed, changed, or
          discontinued. Maintain appropriate backups and do not rely on the
          software as the only means of accessing critical information.
        </p>
        <p>
          Software components distributed under open-source licenses remain
          governed by those licenses. These terms do not take away rights those
          licenses grant. TechSonix’s names, logos, website copy, and other
          materials remain protected by applicable intellectual-property rights.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Warranty and liability limitations",
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, TechSonix provides
          the website and software “as is” and “as available,” without
          warranties of uninterrupted operation, fitness for a particular
          purpose, merchantability, or non-infringement, except where an express
          agreement or applicable law provides otherwise.
        </p>
        <p>
          To the fullest extent permitted by applicable law, TechSonix is not
          liable for indirect, incidental, consequential, special, or punitive
          losses arising from use of the services, including loss of profits,
          opportunity, or data. TechSonix does not assume responsibility for
          unlawful acts of users or independent operators solely by publishing
          the application.
        </p>
        <p>
          Nothing in these terms excludes or limits liability for TechSonix’s
          fraud or intentional misconduct, or any liability that cannot lawfully
          be excluded or limited. Mandatory consumer rights remain available,
          including any applicable rights concerning defective software or
          services. Applicable law may give you remedies despite these terms.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes, concerns, and contact",
    content: (
      <>
        <p>
          We may update these terms as the services change and will identify the
          revision date. Where required, we will provide notice or obtain
          agreement for material changes. You can stop using the services at any
          time; doing so does not remove previously published records.
        </p>
        <p>
          Stopping use or deleting the application does not remove obligations
          or claims arising from earlier conduct. The responsibility, indemnity,
          and liability provisions continue to apply to that conduct, subject to
          applicable law. Revised terms will not expand your obligations for
          conduct that occurred before the revision took effect.
        </p>
        <p>
          Contact <a href="/epixnet/support/">TechSonix, Inc.</a> for questions,
          complaints, or a request to review a decision. See the{" "}
          <a href="/epixnet/privacy/">privacy policy</a> for data handling and
          the <a href="/epixnet/delete-data/">deletion page</a> for removal
          requests.
        </p>
      </>
    ),
  },
];
export default function Terms() {
  return (
    <PolicyLayout
      title="Terms of use."
      intro="The scope of TechSonix’s services, your responsibilities, and important limits when using EpixNet."
      sections={sections}
    />
  );
}
