// next/image doesn't prepend basePath when `unoptimized` is set, so static
// asset URLs need the GitHub Pages prefix applied at build time.
// ASSET_VERSION busts browser/CDN caches when image files are replaced
// under the same name — bump it whenever photos are refreshed.
const ASSET_VERSION = "2";

export const asset = (path: string) =>
  (process.env.GITHUB_PAGES === "true" ? "/Sereen" : "") +
  path +
  `?v=${ASSET_VERSION}`;
