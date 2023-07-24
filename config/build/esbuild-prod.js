import * as esbuild from "esbuild";
import { prod_config } from "./esbuild-config.js";


esbuild.build(prod_config);