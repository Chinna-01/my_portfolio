// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-site-chinnas-projects-8fa3da0b.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://portfolio-site-chinnas-projects-8fa3da0b.vercel.app/#projects",
      lastModified: new Date(),
    },
    {
      url: "https://portfolio-site-chinnas-projects-8fa3da0b.vercel.app/#about",
      lastModified: new Date(),
    },
    {
      url: "https://portfolio-site-chinnas-projects-8fa3da0b.vercel.app/#contact",
      lastModified: new Date(),
    },
  ];
}
