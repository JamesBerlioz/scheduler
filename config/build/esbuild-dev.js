import * as esbuild from "esbuild";
import { dev_config } from "./esbuild-config.js";

const args = process.argv.slice(2);
const watch = args.includes("--watch");

const context = await esbuild.context(dev_config);

if (watch) {
  await context.watch();
  console.log("watching...");
} else {
  context.rebuild();
  context.dispose();
}
