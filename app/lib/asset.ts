// next/image doesn't prepend basePath when `unoptimized` is set, so static
// asset URLs need the GitHub Pages prefix applied at build time.
export const asset = (path: string) =>
  (process.env.GITHUB_PAGES === "true" ? "/Sereen" : "") + path;
