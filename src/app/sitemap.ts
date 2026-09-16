import type { MetadataRoute } from "next";
import { services } from "../lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "services/",
    "about/",
    "support/",
    "privacy/",
    "terms/",
    "delete-data/",
    ...services.map((s) => `services/${s.slug}/`),
  ].map((path) => ({ url: `https://techsonix.com/${path}` }));
}
