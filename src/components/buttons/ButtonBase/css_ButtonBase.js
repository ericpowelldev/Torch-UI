// DEPENDENCIES -------------------------------------------------- //

const { convertStylesheet, themeVar } = require("../../../utils/css-engine/helpers");

// MAIN ENTRY -------------------------------------------------- //

/** Build ButtonBase CSS */
const css_ButtonBase = (flattenedTheme) => {
  // INITIALIZE //

  let str = ``;

  // STYLESHEETS //

  const button = {
    selector: `btn-base`,
    styles: {
      position: `relative`,
      overflow: `hidden`,
      display: `inline-flex`,
      alignItems: `center`,
      justifyContent: `center`,
      padding: 0,
      border: 0,
      borderRadius: themeVar(`radius.button`),
      margin: 0,
      fontFamily: themeVar(`text.familyButton`),
      fontSize: themeVar(`text.sizeButton`),
      fontWeight: themeVar(`text.weightButton`),
      lineHeight: themeVar(`text.heightButton`),
      background: `inherit`,
      color: `inherit`,
      cursor: `pointer`,
      transition: themeVar(`transition.button`),
      userSelect: `none`,
    },
  };
  const label = {
    selector: `btn-base-label`,
    styles: {
      lineHeight: themeVar(`text.heightButton`),
      userSelect: `none`,
      pointerEvents: `none`,
    },
  };

  // CONVERT STYLESHEETS //

  str += convertStylesheet(button);
  str += convertStylesheet(label);

  // RETURN //

  return str;
};

// EXPORT -------------------------------------------------- //

module.exports = css_ButtonBase;
