// DEPENDENCIES -------------------------------------------------- //

const useComments = true;
const prefix = ``;

// FLATTEN HELPERS -------------------------------------------------- //

/** Traverse and flatten an object, using the nested structure as a naming convention */
function traverseAndFlatten(currentNode, target, flattenedKey) {
  for (var key in currentNode) {
    if (currentNode.hasOwnProperty(key)) {
      var newKey;
      if (flattenedKey === undefined) {
        newKey = key;
      } else {
        newKey = flattenedKey + `.` + key;
      }

      var value = currentNode[key];
      if (typeof value === "object") {
        traverseAndFlatten(value, target, newKey);
      } else {
        target[newKey] = value;
      }
    }
  }
}

/** Flatten the theme object */
function flattenTheme(theme) {
  let flattenedTheme = {};
  traverseAndFlatten(theme, flattenedTheme);
  return flattenedTheme;
}

// CONVERSION HELPERS -------------------------------------------------- //

/** Get the proper CSS var name from a string */
const getVar = (str) => {
  return `--${str.replaceAll(`.`, `-`)}`;
};

/** Insert a root CSS variable into the CSS string */
const themeVar = (varStr) => {
  return `var(${getVar(varStr)})`;
};

/** Convert camel case to kebab case */
const cssCase = (str) => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};

/** Convert a Javascript stylesheet to a CSS stylesheet */
const convertStylesheet = (stylesheet) => {
  const { selector, styles = null, hoverStyles = null, activeStyles = null } = stylesheet;

  let str = ``;

  if (styles) {
    str += `.${prefix}${selector}{`;
    for (const [key, value] of Object.entries(styles)) {
      str += `${cssCase(key)}:${value};`;
    }
    str += `}`;
  }

  if (hoverStyles) {
    str += `.${prefix}${selector}:hover{`;
    for (const [key, value] of Object.entries(hoverStyles)) {
      str += `${cssCase(key)}:${value};`;
    }
    str += `}`;
  }

  if (activeStyles) {
    str += `.${prefix}${selector}:active{`;
    for (const [key, value] of Object.entries(activeStyles)) {
      str += `${cssCase(key)}:${value};`;
    }
    str += `}`;
  }

  return str;
};

// CSS STRING HELPERS -------------------------------------------------- //

/** Insert raw text into the CSS string */
const insertRaw = (str) => {
  return str;
};

/** Insert a comment into the CSS string */
const insertComment = (str, lineBreak = true) => {
  if (useComments) return `${lineBreak ? `\n\n` : ``}/* ${str} */${lineBreak ? `\n\n` : ``}`;
  return ``;
};

// EXPORT -------------------------------------------------- //

module.exports = { prefix, flattenTheme, getVar, themeVar, cssCase, convertStylesheet, insertRaw, insertComment };
