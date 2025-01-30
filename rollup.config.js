import path from "path";

import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-import-css";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

const pkg = require("./package.json");

const aliasConfig = {
  entries: [
    { find: "@src", replacement: path.resolve(__dirname, "./src") },
    { find: "@components", replacement: path.resolve(__dirname, "./src/components") },
    { find: "@utils", replacement: path.resolve(__dirname, "./src/utils") },
    { find: "@tui", replacement: path.resolve(__dirname, "./src/Tui.tsx") },
  ],
};

const typescriptConfig = {
  tsconfig: "./tsconfig.json",
};

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      alias(aliasConfig),
      commonjs(),
      css(),
      peerDepsExternal(),
      resolve(),
      terser(),
      typescript(typescriptConfig),
    ],
    external: ["react", "react-dom", "@emotion/css", "@emotion/react"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [alias(aliasConfig), css(), dts.default()],
  },
];

export default config;
