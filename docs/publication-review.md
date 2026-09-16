# Publication and app-submission handoff

Prepared 2026-09-16 for TechSonix, Inc. The owner supplied the legal company name.
The owner also confirmed that the integrated wallet is non-custodial. The app
policies now state users' control of keys and transaction authorization and
TechSonix's lack of custodial authority. This does not settle responsibility
for the publisher's own software or conduct; the existing legal exceptions
remain in the terms.
Apple Developer company details have not been retrieved; no address, telephone,
account-holder email, registration number, or team identifier has been copied
or invented. Personal Apple account details must not become public contact data
without the owner's direction.

## Owner facts to confirm

- Confirm the existing Web3Forms recipient is monitored for support, privacy,
  content complaints, deletion requests and appeals. Supply the public contact
  email if desired; this is independent of the Apple login email.
- Confirm the policy's purpose-based retention and complaint/deletion workflow
  reflect how TechSonix will actually operate; identify the people handling them.
- Confirm deployment of the new immutable mobile wallet keeps analytics disabled,
  as stated in the policy. Update the policy before changing that behavior.
- Confirm actual TechSonix-operated xites/services. The policies do not claim
  TechSonix operates every xite or can remove independent replicas.
- Confirm intended countries/audience and any resulting additional legal notices.
  Terms do not invent a governing state, mandatory arbitration, a hard age gate,
  or a damages cap. Legal review should evaluate the liability provisions for
  the markets in which the app is offered.
- Review the explicit wallet-loss provisions: recovery information, mistaken
  transfers, scams/approvals, independent service failures, and market/network
  risks. They do not promise reimbursement or insurance, but preserve duties
  imposed by law and express agreements. This is not a determination that
  TechSonix is free of liability for every loss, including losses involving its
  own software or conduct.
- Have counsel review the user-conduct indemnity for the intended markets. It
  covers third-party claims caused by a user's material breach, unlawful conduct
  or infringement, with proportional losses, documented reasonable costs,
  prompt notice, participation and settlement consent. It excludes TechSonix's
  own fault and users' exercise of their rights. This is a proposed contract
  provision, not a finding that every user or claim is covered.
- Verify that the release presents the terms, including the responsibility and
  indemnity notice, before obtaining agreement and preserves the version agreed
  to. Publishing the page alone does not verify the app's agreement flow. Do not
  apply expanded obligations to earlier conduct retroactively.

## Publication sequence

1. Review the source and local production preview, including all legal pages.
2. Confirm contact routing and operational facts above, then merge/publish the
   source and deploy the static export with `npm run deploy`.
3. Verify every public HTTPS policy/support route and perform an authorized
   benign support receipt test. Mocked form tests do not establish inbox delivery.
4. Configure the wallet build with `EPIX_TERMS_URL=https://techsonix.com/epixnet/terms/`
   and `EPIX_PRIVACY_URL=https://techsonix.com/epixnet/privacy/`. Keep store-build mode
   enabled. Publish a clean wallet artifact and update EpixNet's immutable pins.
5. Use the support and deletion URLs in the store records after their live checks.

A deletion-request page does not implement account deletion inside the app.
Dashboard publication does not publish Epix Sites moderation changes. Continue
those separate release gates in the EpixNet submission package.

## References checked

- [Wallet policy comparison](wallet-policy-comparison.md): Keplr, Phantom and
  MetaMask terms and privacy notices reviewed on 16 September 2026. The draft
  uses original language reflecting EpixNet's implementation and retains the
  existing applicable-law exception to liability exclusions.
- [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/), sections 1.2, 1.5, 5.1.
- [Google User Data](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en): public HTML privacy policy, publisher identification, contact mechanism, retention and deletion disclosures.
- [Google UGC](https://support.google.com/googleplay/android-developer/answer/9876937?hl=en): applicable moderation duties remain with the app publisher.
- [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
- [Web3Forms privacy](https://web3forms.com/privacy): form delivery and processing.
- [UK government guidance on statutory consumer rights](https://www.gov.uk/unfair-terms-in-sales-contracts/implied-rights): an example of limits on contractual exclusions. This is not a choice of UK law or a finding that it applies to TechSonix; assess each intended release market.
- [California Civil Code section 1668](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1668.): an example of statutory restrictions on exempting a party from its own fraud, willful injury or violation of law. This is not a choice of California law.
- [CMA guidance on writing fair consumer contracts](https://www.gov.uk/guidance/writing-a-fair-contract-for-customers): overly broad exclusions are not cured merely by saying they apply as far as law permits. Review substance and clarity for each intended market.

Policies allocate responsibility without claiming blanket legal immunity. Scope
and enforceability depend on facts and applicable law; publication alone is not
an app-store approval or a legal determination.
User terms also do not transfer TechSonix's developer obligations to Apple or
Google onto end users; keep the existing platform and moderation release gates.

## Validation completed

- Production static export and strict TypeScript checks passed.
- Export validator checked 19 HTML outputs, all internal links/fragments,
  canonical policy URLs, landmarks, CNAME, and `.nojekyll`.
- Four contact-delivery tests passed using mocked network responses: explicit
  acceptance, provider rejection, malformed/failed responses, and network errors.
  No test email or complaint was sent.
- Browser inspection covered desktop homepage/privacy layout, 390 px layouts
  for eight principal routes, mobile menu navigation, required form fields, and
  default report/deletion topics. No horizontal overflow was found.
- `npm audit` reported zero vulnerabilities after dependency updates.

The production preview runs locally at http://127.0.0.1:3005. The existing live
site has not been replaced by these checks.

## Discoverability

At the owner's request, the company homepage, navigation, footer, company page,
contact page, company legal pages, and their metadata do not identify or link
EpixNet. Public GitHub organization links were also removed from the company
pages so they do not direct casual visitors to the source repository.

The app overview, policies, reporting, support, and deletion pages live under
`/epixnet/`. They are omitted from the sitemap and inherit `noindex, nofollow`.
Do not block them in robots.txt: crawlers must read the noindex directive.
See [Google's noindex documentation](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

These are unlisted public pages, not private pages. Direct URLs remain accessible
without a login, wallet, or platform-specific treatment. App users and store
reviewers get the same pages and publisher information. This change concerns
company-site navigation and search indexing, not concealing features from review.
The existing public repository and third-party links can still reveal the app.

The export validator checks every company HTML page (including metadata and
hydration data) for app references, verifies the app routes carry noindex, and
rejects app entries in the sitemap or crawler blocks that prevent reading noindex.
