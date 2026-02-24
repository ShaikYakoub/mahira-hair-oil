import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mahiraorganics.com",
      lastModified: new Date(),
    },
    {
      url: "https://mahiraorganics.com/products",
      lastModified: new Date(),
    },
  ];
}
