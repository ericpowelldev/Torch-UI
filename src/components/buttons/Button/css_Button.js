// DEPENDENCIES -------------------------------------------------- //

const { convertStylesheet, themeVar } = require("../../../utils/css-engine/helpers");
const { buttonVariantValues, colorValues, sizeValues, tintValues } = require("../../../utils/css-engine/types");

// HELPERS -------------------------------------------------- //

/** Get button padding from size prop */
const getRootPadding = (size) => {
  if (size === `xs` || size === `min`) return `4px 6px`;
  if (size === `sm`) return `6px 9px`;
  if (size === `md`) return `8px 12px`;
  if (size === `lg`) return `10px 15px`;
  if (size === `xl` || size === `max`) return `12px 18px`;
  return `8px 12px`;
};

/** Get button label size from size prop */
const getLabelSize = (size) => {
  if (size === `xs` || size === `min`) return `12px`;
  if (size === `sm`) return `13px`;
  if (size === `md`) return `14px`;
  if (size === `lg`) return `15px`;
  if (size === `xl` || size === `max`) return `16px`;
  return `14px`;
};

/** Get button icon size from size prop */
const getIconSize = (size) => {
  if (size === `xs` || size === `min`) return `15px`;
  if (size === `sm`) return `17px`;
  if (size === `md`) return `18px`;
  if (size === `lg`) return `19px`;
  if (size === `xl` || size === `max`) return `21px`;
  return `18px`;
};

// MAIN ENTRY -------------------------------------------------- //

/** Build Button CSS */
const css_Button = (flattenedTheme) => {
  // INITIALIZE //

  let str = ``;

  // BUTTON //

  // Button (base)
  const buttonBase = {
    selector: `btn`,
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
  str += convertStylesheet(buttonBase);

  // Button (color)
  let colorCombinations = [];

  buttonVariantValues?.forEach((variant) => {
    colorValues?.forEach((color) => {
      tintValues?.forEach((tint) => {
        colorCombinations.push({ variant, color, tint });
      });
    });
  });

  colorCombinations?.forEach((combo) => {
    const { variant, color, tint } = combo;

    const selector = `btn-${variant}-${color}-${tint}`;
    let styles = {};
    let hoverStyles = {};
    let activeStyles = {};

    if (variant === `solid`) {
      styles = {
        backgroundColor: themeVar(`color.${color}.${tint}`),
        color: themeVar(`color.${color}.i${tint}`),
      };
      hoverStyles = {
        backgroundColor: themeVar(`color.${color}.${tint}`) + `d4`,
      };
      activeStyles = {
        backgroundColor: themeVar(`color.${color}.${tint}`) + `a0`,
        transition: themeVar(`transition.none`),
      };
    }

    if (variant === `outline`) {
      styles = {
        outline: `1px solid ${themeVar(`color.${color}.${tint}`)}`,
        outlineOffset: `-1px`,
        backgroundColor: `transparent`,
        color: themeVar(`color.${color}.${tint}`),
      };
      hoverStyles = {
        backgroundColor: themeVar(`color.${color}.${tint}`) + `24`,
      };
      activeStyles = {
        backgroundColor: themeVar(`color.${color}.${tint}`) + `48`,
        transition: themeVar(`transition.none`),
      };
    }

    if (variant === `transparent`) {
      styles = {
        backgroundColor: themeVar(`color.${color}.${tint}`) + `24`,
        color: themeVar(`color.${color}.${tint}`),
      };
      hoverStyles = {
        backgroundColor: themeVar(`color.${color}.${tint}`) + `48`,
      };
      activeStyles = {
        backgroundColor: themeVar(`color.${color}.${tint}`) + `64`,
        transition: themeVar(`transition.none`),
      };
    }

    if (variant === `link`) {
      styles = {
        backgroundColor: `transparent`,
        color: themeVar(`color.${color}.${tint}`),
      };
      hoverStyles = {
        backgroundColor: themeVar(`color.${color}.${tint}`) + `24`,
      };
      activeStyles = {
        backgroundColor: themeVar(`color.${color}.${tint}`) + `48`,
        transition: themeVar(`transition.none`),
      };
    }

    const stylesheet = { selector, styles, hoverStyles, activeStyles };
    str += convertStylesheet(stylesheet);
  });

  // Button (disabled)
  buttonVariantValues?.forEach((variant) => {
    const selector = `btn-${variant}-disabled`;
    let styles = {};

    if (variant === `solid`) {
      styles = {
        ...styles,
        backgroundColor: themeVar(`color.bgd`),
      };
    }

    if (variant === `outline`) {
      styles = {
        ...styles,
        outline: `1px solid ${themeVar(`color.fgd`)}`,
        outlineOffset: `-1px`,
        backgroundColor: `transparent`,
      };
    }

    if (variant === `transparent` || variant === `link`) {
      styles = {
        ...styles,
        backgroundColor: `transparent`,
      };
    }

    styles = {
      ...styles,
      color: themeVar(`color.fgd`),
      cursor: `not-allowed`,
      userSelect: `none`,
      pointerEvents: `none`,
    };

    const stylesheet = { selector, styles };
    str += convertStylesheet(stylesheet);
  });

  // Button (size)
  sizeValues?.forEach((size) => {
    const selector = `btn-${size}`;
    const styles = {
      padding: getRootPadding(size),
    };
    const stylesheet = { selector, styles };
    str += convertStylesheet(stylesheet);
  });

  // Button (fullWidth)
  const buttonFullWidth = {
    selector: `btn-fullwidth`,
    styles: {
      width: `100%`,
    },
  };
  str += convertStylesheet(buttonFullWidth);

  // LABEL //

  // Label (base)
  const labelBase = {
    selector: `btn-label`,
    styles: {
      userSelect: `none`,
      pointerEvents: `none`,
    },
  };
  str += convertStylesheet(labelBase);

  // Label (size)
  sizeValues?.forEach((size) => {
    const selector = `btn-label-${size}`;
    const styles = {
      fontSize: getLabelSize(size),
    };
    const stylesheet = { selector, styles };
    str += convertStylesheet(stylesheet);
  });

  // Label (uppercase)
  const labelUppercase = {
    selector: `btn-label-uppercase`,
    styles: {
      textTransform: `uppercase`,
    },
  };
  str += convertStylesheet(labelUppercase);

  // START ICON //
  
  // END ICON //

  // RETURN //

  return str;
};

// EXPORT -------------------------------------------------- //

module.exports = css_Button;
