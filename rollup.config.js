import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-import-css";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [commonjs(), css(), peerDepsExternal(), resolve(), terser(), typescript({ tsconfig: "./tsconfig.json" })],
    external: ["react", "react-dom", "@emotion/css", "@emotion/react"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [css(), dts.default()],
  },
];
