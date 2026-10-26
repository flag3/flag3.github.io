import type { MetadataRoute } from "next";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { metaData } from "./lib/config";

export const dynamic = "force-static";

function pdfPaths(directory: string, prefix = "/pdfs"): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = `${prefix}/${entry.name}`;
    return entry.isDirectory()
      ? pdfPaths(join(directory, entry.name), path)
      : entry.name.endsWith(".pdf")
        ? [path]
        : [];
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/pdfs",
    "/tools",
    "/hex-converter-gb-pokemon/",
    "/pixel-art-editor/",
    "/vite-input-gb-pokemon/",
    "/dsum-watch/",
    ...pdfPaths(join(process.cwd(), "public", "pdfs")),
  ];
  return paths.map((path) => ({ url: new URL(path, metaData.baseUrl).toString() }));
}
