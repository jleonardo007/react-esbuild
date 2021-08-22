import { serve } from "esbuild";
import open from "open";
import startDevServer from "./dev-server.js";

const DEV_SERVER_URL = `http://localhost:3000`;

const serveOptions = {
  servedir: "www",
  host: "127.0.0.1",
  port: 8080,
};

const transformOptions = {
  entryPoints: ["src/index.js"],
  outdir: "www/serve",
  bundle: true,
  format: "esm",
  inject: ["bundler/react-shim.js"],
  loader: { ".js": "jsx" },
};

(async () => {
  const server = await serve(serveOptions, transformOptions);
  const { host: HOST, port: PORT } = server;

  console.log("ESBuild is now serving your files at:");
  console.table({ HOST, PORT });

  startDevServer();
  await open(DEV_SERVER_URL);
})();
