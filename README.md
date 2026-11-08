# FridgeVista Website

Static marketing, support, and legal website for FridgeVista, built with Astro and Tailwind CSS.

## Development

```powershell
npm install
npm run dev
```

Set `ASTRO_TELEMETRY_DISABLED=1` if the environment cannot write Astro's telemetry configuration.

## Routes

- `/` and `/zh/` — localized homepages
- `/features/` and `/zh/features/` — product features
- `/pricing/` and `/zh/pricing/` — plan overview
- `/support/` and `/zh/support/` — forum-style support hub
- `/privacy/`, `/terms/`, `/subprocessors/`, `/licenses/`
- `/support/delete-account/`
- Matching `/zh/` legal and account-deletion routes
- `/sitemap.xml`, `/robots.txt`, and a custom `/404.html`

App-generated legal links using `?lang=zh` or `?lang=en` are redirected to the matching language route.

## Support submissions

The support forum currently uses the owner-provided Google Forms:

- English: https://forms.gle/bLcumMVMQak9A3H99
- Chinese: https://forms.gle/8kr1TrdPfExXGjr78

The links are centralized in `src/lib/site.ts`. See `docs/support-forum-sheets.md` for connecting responses to Google Sheets.

## Validation

```powershell
npm run check
npm run build
```
