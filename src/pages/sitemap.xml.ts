import type { APIRoute } from "astro";

const routes = [
  "/",
  "/features/",
  "/pricing/",
  "/support/",
  "/privacy/",
  "/terms/",
  "/support/delete-account/",
  "/subprocessors/",
  "/licenses/",
  "/zh/",
  "/zh/features/",
  "/zh/pricing/",
  "/zh/support/",
  "/zh/privacy/",
  "/zh/terms/",
  "/zh/support/delete-account/",
  "/zh/subprocessors/",
  "/zh/licenses/",
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map((route) => {
      const english = route.startsWith("/zh/") ? route.slice(3) : route;
      const chinese = english === "/" ? "/zh/" : `/zh${english}`;

      return `<url><loc>https://fridgevista.com${route}</loc><lastmod>${today}</lastmod><xhtml:link rel="alternate" hreflang="${route.startsWith("/zh/") ? "zh-Hans" : "en"}" href="https://fridgevista.com${route}"/><xhtml:link rel="alternate" hreflang="${route.startsWith("/zh/") ? "en" : "zh-Hans"}" href="https://fridgevista.com${route.startsWith("/zh/") ? english : chinese}"/></url>`;
    })
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
