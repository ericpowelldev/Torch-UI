// THEME ---------------------------------------------------------------- //

const theme = {
  // Custom style overrides
  custom: {
    dark: {
      color: {
        fg: `#ffffff`,
        bg: `#303840`,
      },
      text: {
        family: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
      }
    },
  },

  // Colors
  color: {
    // Brand colors
    primary: `#f46000`,
    secondary: `#4080c8`,
    tertiary: `#40b4a0`,

    // Utility colors
    utility: `#607080`,
    error: `#800020`,
    warning: `#806000`,
    success: `#408020`,
    info: `#0880a0`,

    // General colors
    grayscale: `#707880`,

    // Foreground/Text colors
    fg: `#303840`,

    // Background/Wall colors
    bg: `#ffffff`,
  },

  // Text Options
  text: {
    // Font families
    family: `"Roboto", "Helvetica", "Arial", sans-serif`,

    // Font sizes
    size: `16px`,

    // Font weights
    weight: 400,
    weightThin: 200,
    weightLight: 300,
    weightRegular: 400,
    weightMedium: 500,
    weightBold: 700,
    weightBlack: 900,

    // Font heights
    height: 1.333,

    // Header text
    h1: {
      size: `64px`,
      weight: 900,
      height: 1.333,
    },
    h2: {
      size: `48px`,
      weight: 700,
      height: 1.333,
    },
    h3: {
      size: `32px`,
      weight: 700,
      height: 1.333,
    },
    h4: {
      size: `24px`,
      weight: 500,
      height: 1.333,
    },
    h5: {
      size: `21px`,
      weight: 500,
      height: 1.333,
    },
    h6: {
      size: `18px`,
      weight: 500,
      height: 1.333,
    },

    // Paragraph text
    p1: {
      size: `16px`,
      weight: 400,
      height: 1.333,
    },
    p2: {
      size: `14px`,
      weight: 400,
      height: 1.333,
    },
    p3: {
      size: `12px`,
      weight: 400,
      height: 1.333,
    },
    p4: {
      size: `10px`,
      weight: 400,
      height: 1.333,
    },
    p5: {
      size: `9px`,
      weight: 400,
      height: 1.333,
    },
    p6: {
      size: `8px`,
      weight: 400,
      height: 1.333,
    },

    // Special text
    button: {
      family: `"Roboto", "Helvetica", "Arial", sans-serif`,
      size: `14px`,
      weight: 600,
      height: 1,
    },
    input: {
      size: `16px`,
      weight: 400,
      height: `18px`,
    },
    label: {
      size: `12px`,
      weight: 400,
      height: 1,
    },
    sublabel: {
      size: `10px`,
      weight: 400,
      height: 1,
    },
    placeholder: {
      size: `16px`,
      weight: 400,
      height: 1,
    },
  },

  // Pixel Spacing
  space: (num1: number = 2, num2?: number, num3?: number, num4?: number) => {
    const pix = (num: number) => `${4 * num}px`;

    let pixSpace = [];
    if (num1 && typeof num1 === `number`) pixSpace.push(pix(num1));
    if (num2 && typeof num2 === `number`) pixSpace.push(pix(num2));
    if (num3 && typeof num3 === `number`) pixSpace.push(pix(num3));
    if (num4 && typeof num4 === `number`) pixSpace.push(pix(num4));
    return pixSpace.join(` `);
  },

  // Padding Options
  padding: {
    none: 0,
    input: `6px 8px`,
  },

  // Radius Options
  radius: {
    none: 0,
    button: `4px`,
    card: `8px`,
    input: `4px`,
    pill: `24px`,
  },

  // Transition Options
  transition: {
    none: `none`,
    standard: `all 0.15s ease-in-out`,
    button: `all 0.15s ease-in-out`,
  },

  // Shadow Options
  shadow: {
    none: `none`,
    soft: `0 0 12px #00000016`,
    medium: `0 0 12px #00000024`,
    harsh: `0 0 12px #00000048`,
    button: `0px 4px 12px #00000048`,
    text: `1px 1px 2px #00000056`,
  },

  // Blur Options
  blur: {
    none: `none`,
    soft: `blur(8px)`,
    medium: `blur(12px)`,
    harsh: `blue(16px)`,
  },

  // Z-Index Options
  zIndex: {
    base: `0`,
    footer: `1000`,
    header: `1100`,
    menu: `1200`,
    dropdown: `1300`,
    modal: `2000`,
    modalDropdown: `2100`,
    tooltip: `3000`,
    notification: `5000`,
  },

  // Breakpoint Options
  break: {
    min: `0px`,
    xs: {
      up: `481px`,
      down: `480px`,
    },
    sm: {
      up: `769px`,
      down: `768px`,
    },
    md: {
      up: `1025px`,
      down: `1024px`,
    },
    lg: {
      up: `1281px`,
      down: `1280px`,
    },
    xl: {
      up: `1601px`,
      down: `1600px`,
    },
    max: `1920px`,
  },

  // Container Max-Width Options
  container: {
    min: `100%`,
    xs: `420px`,
    sm: `680px`,
    md: `960px`,
    lg: `1200px`,
    xl: `1400px`,
    max: `100%`,
  },
};

// EXPORT ---------------------------------------------------------------- //

export default theme;
