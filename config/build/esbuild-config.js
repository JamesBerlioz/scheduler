import { watchPlugin } from "./plugins/watchPlugin.js";

export const prod_config = {
  outdir: "build",
  entryPoints: ["./src/index.js"],
  entryNames: "bundle",
  bundle: true,
  minify: true,
  sourcemap: true,
};

export const dev_config = {
    outdir: "build",
    entryPoints: ["./src/index.js"],
    entryNames: "bundle",
    bundle: true,
    minify: false,
    sourcemap: true,
    plugins: [watchPlugin],
  };