# Wallet policy comparison

Reviewed 16 September 2026 for TechSonix, Inc. These are the providers' own
published positions, not findings about enforceability or store acceptance.
The comparison informs original EpixNet wording; it is not a copied template.

## Terms and allocation of responsibility

| Provider and current source                                                | Relevant approach                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Keplr terms](https://terms-of-use.keplr.app/), effective 12 November 2025 | Sections 3, 12 and 13 place wallet security, credentials and transfer details on users, describe the lack of custody, and disclaim third-party losses. The aggregate cap is fees paid for the relevant service in the preceding six months, subject to law. Section 11 expressly preserves certain staking-loss claims caused directly by Keplr's gross negligence, fraud or intentional misconduct. |
| [Phantom terms](https://phantom.com/terms), updated 17 March 2026          | Describes software that leaves custody and authorization with users. Users bear credential-loss risks; fees are estimates; third-party services carry separate terms and risks. The liability section excludes specified damages and generally caps total liability at US$100, with jurisdictional exceptions. It also contains indemnity and geographically scoped arbitration provisions.          |
| [MetaMask terms](https://metamask.io/terms-of-use), updated June 2026      | Sections 3 and 9 allocate key security and third-party transaction risks to users. Section 10 generally caps aggregate liability at fees for the relevant offering in the preceding twelve months, or US$25,000 if no fees were paid, with specified exceptions. Consequential-damage exclusions are subject to law. Indemnity and arbitration have separate sections.                               |

The Consensys legal index redirects to the current MetaMask pages above. The
Phantom sources cover the wallet; its merchandise-store policies are separate.

## Privacy practices

| Official source                                                                 | Relevant distinction                                                                                                                                                                               |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Keplr privacy](https://privacy-policy.keplr.app/), effective 22 September 2025 | Discloses public keys and chain data, technical information, mobile device data, analytics, optional permissions and SSO data. Its default infrastructure has a specific IP-processing disclosure. |
| [Phantom privacy](https://phantom.com/privacy), updated 7 July 2026             | Describes public wallet/blockchain data, necessary IP processing, optional analytics and feature-specific partner identity processing. Self-custody does not mean no information is processed.     |
| [MetaMask privacy](https://metamask.io/privacy-notice), updated June 2026       | Says it does not collect private keys, while explaining necessary IP processing, wallet-address API requests, optional MetaMetrics and feature-specific third-party processing.                    |

## Application to EpixNet

- Keep the explicit non-custodial model, user control of keys and approvals,
  inability to recover missing secrets or reverse confirmed transactions, and
  loss provisions for user actions, scams, third parties and network conditions.
- Add required memos/tags to transaction checks; clarify estimated fees and
  possible fees on failed transactions. Explain that displayed financial or
  security information and asset/network support are not guarantees.
- Keep the warranty and liability limitations with a clear applicable-law
  exception. Refer to that exception instead of repeating it throughout the
  terms. No automatic reimbursement or insurance promise is made.
- Keep privacy disclosures grounded in the inspected application: local vault,
  public records, peer sharing, actual network services, disabled optional mobile
  wallet analytics, hosting and support processing. Competitors' SSO, analytics,
  financial products and data practices are not EpixNet's practices.
- Preserve EpixNet's community/reporting obligations and open-source rights.
  Wallet policies alone do not cover its browsing and peer-publishing features.

The draft does not adopt a competitor's monetary cap, arbitration forum,
indemnity, governing law, age restriction or regulatory-status declaration.
Those require decisions matched to TechSonix's services and release markets;
the markedly different caps above are not a universal wallet standard.
Review acceptance and versioned notice in the actual mobile release alongside
the final terms. See [publication review](publication-review.md) for remaining
contact, operations and release facts.

The comparison is a repository document, not a published company-site route.
EpixNet policy pages remain at their direct `/epixnet/` URLs and are absent from
company navigation and the sitemap.
