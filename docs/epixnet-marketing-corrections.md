# epixnet.io copy corrections

Prepared 16 September 2026. The reviewed copy is implemented in
[EpixZone/epixnet.io PR #1](https://github.com/EpixZone/epixnet.io/pull/1).
The table below records the correction approach; the PR is the final source.
The live page has not been updated. Its runtime files and signed manifest are
unchanged. Outdated translated claim passages fall back to the corrected English
until reviewed translations are supplied.

The implementation covers HTML, English locale values, other locales' fallback
behavior, and inline/reusable SVG text. It also replaces the elapsed-date uptime
claim and fixed percentage metric with factual feature labels.

| Key/surface            | Proposed replacement                                                                                                                                                                                                                               |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Page title / `hero.h1` | EpixNet. Websites shared by peers.                                                                                                                                                                                                                 |
| Meta description       | EpixNet shares signed website content through a peer-to-peer network. Availability depends on reachable copies and network conditions.                                                                                                             |
| `hero.sub`             | Publish signed websites and share their content through EpixNet peers. Replication can reduce dependence on a single host; it does not guarantee permanent availability.                                                                           |
| `how.lede`             | EpixNet combines peer-to-peer content sharing with Epix blockchain features such as .epix name records. Signed manifests help clients check downloaded content.                                                                                    |
| `how.chain.title`      | Names and records on the Epix chain.                                                                                                                                                                                                               |
| `how.chain.body`       | EpixNet uses Epix chain records for features such as .epix name resolution. Network access and the configured resolution services are still required. Content verification and name resolution are separate parts of the system.                   |
| `how.net.body`         | Site files can be stored and shared by peers that retain them. A page may also request external services, and network discovery or name resolution can involve supporting infrastructure.                                                          |
| `how.verify.title`     | Signed content, checked by the client                                                                                                                                                                                                              |
| `how.verify.body`      | Clients check signed manifests and file hashes when accepting xite content. These checks help detect unauthorized changes; they do not prove that content is safe, accurate, or lawful. Protect signing keys and review any permissions you grant. |
| `feat.p2p.body`        | Peers can retain and share downloaded content. Availability depends on the copies they keep, their connectivity, and the application's sharing settings.                                                                                           |
| `feat.p2p.bullet1`     | Share hosting across peers.                                                                                                                                                                                                                        |
| `feat.p2p.bullet2`     | Reduce dependence on a single content host.                                                                                                                                                                                                        |
| `feat.p2p.bullet3`     | Keep useful local copies where supported.                                                                                                                                                                                                          |
| Signing/password copy  | Publish with cryptographic keys. Keep backups and protect signing requests, recovery information, and any local wallet password. Key-based publishing does not eliminate phishing.                                                                 |
| `feat.epix.body`       | Use .epix names through EpixNet's name-resolution support. Name control and resolution depend on chain rules, the software, and configured network services.                                                                                       |
| `feat.fast.eyebrow`    | 04 / distributed delivery                                                                                                                                                                                                                          |
| `feat.fast.title`      | More peers can help share the load.                                                                                                                                                                                                                |
| `feat.fast.body`       | Additional reachable copies can improve access. Actual speed depends on peer availability, bandwidth, routing, and the files being requested.                                                                                                      |
| `feat.browser.eyebrow` | 05 / desktop browsing                                                                                                                                                                                                                              |
| `feat.browser.body`    | On supported desktop setups, install the client and open xites through its local web interface in a compatible browser. Native .epix addressing and routing features vary by browser and platform.                                                 |
| `feat.offline.title`   | Read available cached content offline.                                                                                                                                                                                                             |
| `feat.offline.body`    | Files retained on your device may remain readable without a network connection. Uncached resources, live data, wallet actions, and other network features may be unavailable. Updates resume when the required peers and services are reachable.   |
| `dl.sub`               | Open-source software. Review the release notes for supported platforms, installation steps, and build-specific features. Identity and wallet requirements depend on what you use.                                                                  |
| `dl.feat.zero`         | Identity and privacy settings vary by feature and build.                                                                                                                                                                                           |

Remove universal claims that every version is anchored on-chain, every page load
obtains a validator/Merkle proof, a nearest-peer algorithm is guaranteed, no
server is involved, all builds have no telemetry, all content stays forever,
hosting is cost-free, or any site is immune to removal. Do not restore these
claims without current implementation and release-specific evidence.

Keep download availability factual. Source projects and build guides are not
proof of App Store or Google Play availability or approval. Avoid claiming
successful store submission before the actual review outcome.
