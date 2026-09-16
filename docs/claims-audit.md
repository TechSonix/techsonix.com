# Claims audit — 16 September 2026

**Result: corrections were needed. This is not an all-clear for the published
product.** The company-site draft, application source, wallet configuration,
submission drafts, related xite copy, and live landing pages were compared with
implementation evidence. Corrections below are source changes unless explicitly
identified as published. This review is not a penetration test, a cryptographic
audit, a legal opinion, or evidence of store approval.

## Corrections prepared

| Surface                          | Problem                                                                                                                                               | Correction and evidence                                                                                                                                                                                                                                                                                                                    |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Company/app privacy pages        | Saying the site uses HTTPS could imply it is enforced for every visitor. The live HTTP company URL returned 200 rather than redirecting.              | State that HTTPS is available at the HTTPS address and forms submit over HTTPS. Enable GitHub Pages HTTPS enforcement before publication.                                                                                                                                                                                                  |
| Contact confirmation             | Provider acceptance does not prove inbox delivery or that staff read a message.                                                                       | Confirmation now says the submission was accepted for delivery. `src/lib/contact.ts` and mocked delivery tests cover the provider response, not receipt.                                                                                                                                                                                   |
| Core README                      | Blanket privacy, availability, platform availability, and increasing-speed claims exceeded the code.                                                  | Describe conditional peer availability, platform/build differences, separate browser routing, and lack of guaranteed anonymity. Evidence: `epix-tor/src/lib.rs` (`TorMode`), node startup configuration, and native shell routing settings.                                                                                                |
| Dashboard                        | Tor Always was described as making browsing safe; follow-up advice suggested renaming the data directory.                                             | Explain that node and browser routing are separate and Tor does not guarantee anonymity. Remove the directory-renaming instruction. Evidence: `js/Dashboard.js` and native shell routing controls.                                                                                                                                         |
| Wallet analytics                 | “Anonymous Data” was not supported: optional analytics uses persistent IDs, and the Amplitude adapter hashes a public wallet address for its user ID. | Rename to usage data and describe identifiers/activity in English, Korean, and simplified Chinese. Hide analytics controls when no service is configured. Evidence: `packages/background/src/analytics/service.ts`, extension `analytics.ts`, `analytics-amplitude.ts`, and `stores/root.tsx`. A hashed address is not proof of anonymity. |
| Mobile analytics promise         | Empty default credentials did not prevent a store build from enabling analytics.                                                                      | Store webpack configuration now rejects any of the five analytics credentials/settings; artifact validation requires the boolean `analyticsConfigured: false`, rejecting absent or malformed declarations. The final built artifact still needs verification.                                                                              |
| Wallet recovery                  | All-wallet compatibility and absolute inability to recover without a phrase/path ignored compatibility limits and an existing accessible wallet.      | Explain wallet/network/path dependencies and the risk of losing both recovery information and wallet access. Keep the statement that support cannot recover a lost phrase.                                                                                                                                                                 |
| Xite directory                   | A community checkmark or listing claim could be mistaken for a safety, rights, or legal-ownership review.                                             | Clarify that the checkmark concerns content ratings, and a claim demonstrates control of the xite key. Rename README “safe mode” to adult-content filter. Evidence: `js/Trust.js`, `js/Site.js`, and `js/ClaimForm.js`.                                                                                                                    |
| Mail                             | Server/account-free copy and outdated ECIES architecture documentation obscured the connected node's role.                                            | Explain node-side encryption/decryption and xID use. Replace obsolete backend documentation with current channel API behavior, including optional local index encryption. Evidence: Mail `js/Channel.js`; core `epix-plugins/src/channel.rs` and `epix-channel/src/enc.rs`.                                                                |
| Submission reviewer instructions | The empty mobile feed tab was still called Feed/Discovery.                                                                                            | Match the implemented Discover/Feed behavior in `docs/store-submission/store-listing.md`.                                                                                                                                                                                                                                                  |

Repository paths above are relative to their respective EpixNet, epix-wallet,
EpixDash-Xite, EpixSites-Xite, or EpixMail-Xite checkout. Company-site paths are
relative to this repository. Existing app-submission work has been preserved. Core README, wallet, artifact
checker, and directory edits remain local alongside the existing submission work;
they have not been included in unrelated repository commits or release artifacts.

## Statements with supporting evidence

- The wallet uses a local encrypted software vault. The owner confirmed the
  non-custodial model; the inspected vault/keyring source is consistent with it.
  This is not evidence that the software is vulnerability-free or that every
  integration and release artifact behaves identically.
- Third-party RPC, price, website, peer, and transport services can receive
  requests and connection information. The policies disclose this and do not
  promise that using Tor makes all activity anonymous.
- Local deletion cannot erase public-chain records or copies held by independent
  peers. The draft appropriately distinguishes local deletion from removal
  elsewhere.
- Company pages in the generated draft omit EpixNet. App pages are public direct
  URLs with noindex and no sitemap entry; this limits discovery but does not make
  them private or undiscoverable.
- The draft company website does not add advertising or audience-analytics code.
  GitHub Pages and Web3Forms still process requests; neither a no-tracking promise
  about those providers nor one about independent xites follows from this.

## Open findings and publication gates

1. **Live epixnet.io still needs the corrected source published.** The owner
   authorized a new repository from the existing local xite. The public
   manifest-listed files were copied into the private
   [EpixZone/epixnet.io repository](https://github.com/EpixZone/epixnet.io), and
   [draft PR #1](https://github.com/EpixZone/epixnet.io/pull/1) corrects the copy,
   diagrams, unsupported metrics, and mobile download labels. Outdated translated
   claims now fall back to corrected English pending translation review. Browser
   checks covered language switching, release links, mobile download identification,
   and a 390 px viewport without horizontal overflow. The source runtime directory
   and signed manifest remain unchanged. Merge the reviewed source, sign/publish
   on the owner's computer, and re-check the actual public pages.
2. **Source fixes are not release verification.** Rebuild the wallet with store
   settings, publish an immutable artifact, update native pins, and run the release
   checker against the files actually shipped. Inspect first-run consent, policy
   links, settings, and network behavior on final iOS and Android builds. Desktop
   builds with analytics enabled need disclosures matching that configuration.
3. **Support and privacy operations are unverified.** Confirm who receives forms,
   whether the recipient is monitored, provider integrations, retention/deletion
   practices, complaint handling, and any response commitments. No real support
   message was sent in this audit. A working form UI is not evidence that these
   operational statements are fulfilled.
4. **Xite changes need owner signing/publication.** The new copy in the dashboard,
   directory, and mail checkouts is not automatically reflected in peer-served
   content. The dashboard correction is in
   [draft PR #38](https://github.com/EpixZone/EpixDash-Xite/pull/38); the mail
   correction is in [draft PR #8](https://github.com/EpixZone/EpixMail-Xite/pull/8). Historical translation entries do not override new English lookup
   keys, but a fluent translation review remains appropriate before distribution.
5. **Content ownership and immunity are not established.** A signature, community
   rating, or user-curated list does not establish content rights. Terms assign
   user responsibilities while preserving mandatory rights; they do not establish
   that TechSonix can never be liable or remove publisher obligations to stores.

## Validation for these changes

- Wallet extension package TypeScript check passed.
- Store configuration accepted empty analytics settings and rejected each of the
  five settings independently. No real credentials were printed or used.
- Mobile artifact regression checks passed, including enabled, absent, null,
  and string-valued analytics declarations.
- Dashboard, directory, and mail JavaScript syntax checks passed; the existing
  directory safety regression suite passed.
- Company-site production build, TypeScript, four mocked contact tests, and
  validation of 19 exported pages passed. Company pages remain free of app references.
- Marketing-site locale fallback test and JavaScript syntax checks passed; browser
  console inspection reported no errors or warnings during the checked flows.

## Public sources inspected

- [EpixNet landing page](https://epixnet.io/) — live product claims.
- [TechSonix](https://techsonix.com/) — existing live company page; the redesigned
  draft is not deployed yet.
- [Web3Forms privacy policy](https://web3forms.com/privacy) — provider processing
  and optional integrations. The operator's actual account configuration was
  not verified.

The outcome is a bounded audit of accessible source and public copy, not a claim
that no misleading statement remains anywhere in the ecosystem.
