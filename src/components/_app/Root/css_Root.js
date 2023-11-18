// DEPENDENCIES -------------------------------------------------- //

const { getVar } = require("../../../utils/css-engine/helpers");

// MAIN ENTRY -------------------------------------------------- //

/** Build the Root CSS variables from the flattened theme */
const css_Root = (flattenedTheme) => {
  // Initialize the string with the root property
  let str = `:root{`;

  // Loop through the flattened theme object and add to the string
  for (const [key, value] of Object.entries(flattenedTheme)) {
    if (typeof value === `function`) continue;
    str += `${getVar(key)}:${value};`;
  }

  // Add a closing bracket to the string
  str += `}`;

  // Return the string
  return str;
};

// EXPORT -------------------------------------------------- //

module.exports = css_Root;
