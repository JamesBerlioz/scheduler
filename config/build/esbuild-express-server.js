import ESBuild from "esbuild";
import path from "path";
import { config } from "./esbuild-config.js";
import express from "express";

const PORT = Number(process.env.PORT) || 3000;

const app = express();

app.use(express.static(path.resolve("build")));

app.listen(PORT, () =>
  console.log("server started on http://localhost:" + PORT)
);

ESBuild.build(config)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
