import { buildSync } from "esbuild";

buildSync({
  entryPoints: ["public/index.html"],
  outdir: "build",
  bundle: true,
  sourcemap: true,
  minify: true,
  format: "esm",
  inject: ["bundler/react-shim.js"],
  loader: { ".js": "jsx", ".html": "text" },
  target: ["es6"],
});
