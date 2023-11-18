// DEPENDENCIES -------------------------------------------------- //

import fs from "fs-extra";
import deepmerge from "deepmerge";

import extendTheme from "../theme/extendTheme.js";
import defaultTheme from "../theme/defaultTheme.js";
import inputTheme from "../../_test/theme.js";

import cssCompile from "./compiler.js";

const outputDir = `src/static/styles`;
const outputFilename = `index`;

// HELPERS -------------------------------------------------- //

/** Write a CSS file to the specified directory using a string input */
const writeCSS = async (str, dir, filename) => {
  try {
    if (!str) throw new Error(`CSS String is invalid!`);
    if (!dir) throw new Error(`Directory is invalid!`);
    if (!filename) throw new Error(`Filename is invalid!`);

    const res = await fs.writeFile(`${dir}/${filename}.css`, str);
    console.log(`CSS file successfully written!`);
    return res;
  } catch (err) {
    console.error(`Failed to write CSS:`, err);
    return null;
  }
};

// ORCHESTRATION -------------------------------------------------- //

/** Main orchestration call - Handles the full stack of operations to execute */
const main = async () => {
  try {
    let theme;
    let css;

    // Deep merge the default theme and input theme
    // Then apply functionality to extend the theme object
    try {
      theme = deepmerge(defaultTheme, inputTheme);
      theme = extendTheme(theme);
    } catch (err) {
      const errStr = `Failed to extend theme`;
      console.error(`${errStr}:`, err);
      throw new Error(errStr);
    }

    // Build the CSS string
    try {
      css = cssCompile(theme);
    } catch (err) {
      const errStr = `Failed to build the CSS string`;
      console.error(`${errStr}:`, err);
      throw new Error(errStr);
    }

    // Write the string to a CSS file
    try {
      const res = await writeCSS(css, outputDir, outputFilename);
    } catch (err) {
      const errStr = `Failed to write the CSS file`;
      console.error(`${errStr}:`, err);
      throw new Error(errStr);
    }
  } catch (err) {
    console.error(`Function failed to create CSS!`);
  }
};

// EXECUTION -------------------------------------------------- //

main();
