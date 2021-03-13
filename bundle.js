//@ts-check
var fs = require("fs");

var esbuild = require("esbuild");
const { readdirSync } = fs;

var path = require("path");

var src = path.join(__dirname, "src");

var targets = ["src/App.js"]


esbuild.build({
  entryPoints: targets,
  bundle: true,
  minifySyntax: true,
  sourcemap: false,
  target:'es2015',
  external:["react","react-dom"],
  outdir: "src",
  outExtension: {
    ".js": ".bundle.js",
  },
  // plugins: [plugin],
  format : 'esm'
});
