# TechSonix website

The TechSonix, Inc. company website, with unlisted public product-information pages.
Next.js exports static HTML to `out/`; GitHub Pages serves the `gh-pages`
branch at **https://techsonix.com**. Policy content is present in the HTML and
can be read without JavaScript, a login, a wallet, or payment.

## Work locally

Use Node 22 or newer and npm (the lockfile is committed).

```sh
npm ci
npm run dev
```

For a production preview:

```sh
NEXT_TELEMETRY_DISABLED=1 npm run build
npm run check
npm run preview
```

Open http://127.0.0.1:3005. The check verifies the actual export's internal
links/fragments, policy routes, landmarks, CNAME and `.nojekyll`.

## Company routes

Company navigation leads only to company pages. These pages contain no EpixNet
references, app links, or app metadata.

| Page                  | URL                                |
| --------------------- | ---------------------------------- |
| Company homepage      | https://techsonix.com/             |
| Services              | https://techsonix.com/services/    |
| Company               | https://techsonix.com/about/       |
| Contact               | https://techsonix.com/support/     |
| Website privacy       | https://techsonix.com/privacy/     |
| Website terms         | https://techsonix.com/terms/       |
| Contact-data deletion | https://techsonix.com/delete-data/ |

## Direct app URLs

These pages are accessible to everyone with a direct link. They are not linked
from company pages or listed in the sitemap. All inherit `noindex, nofollow`;
this is a search-engine directive, not access control. The company GitHub links
are also omitted from public site navigation. The repository itself remains public.

| Page                               | URL                                        |
| ---------------------------------- | ------------------------------------------ |
| EpixNet information                | https://techsonix.com/epixnet/             |
| App privacy                        | https://techsonix.com/epixnet/privacy/     |
| App terms                          | https://techsonix.com/epixnet/terms/       |
| App support                        | https://techsonix.com/epixnet/support/     |
| Community rules/private reports    | https://techsonix.com/epixnet/community/   |
| App data/account deletion requests | https://techsonix.com/epixnet/delete-data/ |

Use the direct app URLs in the app and store listings after deployment and live
verification. Do not block them in robots.txt or require a login: the public
policy and support pages must remain readable, including their noindex directives.
All URLs are deployment targets until the redesigned export is published.

## Contact delivery

Forms reuse the website's existing public Web3Forms identifier. Override it with
`NEXT_PUBLIC_WEB3FORMS_KEY` if the owner changes the receiving inbox. Set
`NEXT_PUBLIC_CONTACT_EMAIL` to a verified public address to show an email fallback.
No private credentials belong in `NEXT_PUBLIC_*` variables.

The form checks both HTTP status and the provider's `success` field, preserves
input on failure, times out stalled submissions, and has a native HTML fallback.
There are no automatic support-log uploads or form file attachments. A real
receipt test requires owner authorization; local checks must not send reports
or personal data to the inbox. See [release notes](docs/publication-review.md).

## Deployment

GitHub Pages currently uses the `gh-pages` branch. Keep that setting.

```sh
NEXT_TELEMETRY_DISABLED=1 npm run deploy
```

This builds and validates before pushing generated files to `gh-pages`, retaining
`CNAME` and `.nojekyll`. It does not merge source changes into `main`; review and
merge the source PR separately. HTTPS is available for the domain; enable the
Pages “Enforce HTTPS” setting for consistent secure navigation.

## Policy maintenance

Company policies live in `src/app/privacy`, `terms`, and `delete-data`.
App policies and support live under `src/app/epixnet/`.
Shared publisher information is in `src/lib/site.ts`. Update the policy revision
date when practices change. The terms distinguish a software publisher from
independent users/operators and preserve non-waivable legal rights. They do not
promise immunity from liability or establish app-store compliance by themselves.

Before a store release, confirm actual operational practices and the immutable
wallet build against the policy. The website request form is not a substitute
for applicable in-app account deletion, moderation, or data-safety disclosures.
