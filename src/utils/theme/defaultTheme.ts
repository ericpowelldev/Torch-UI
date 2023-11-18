// THEME -------------------------------------------------- //

const theme = {
  // Colors
  color: {
    // Brand colors
    primary: `#802408`,
    secondary: `#163280`,
    tertiary: `#087080`,

    // Utility colors
    utility: `#607080`,
    info: `#104080`,
    error: `#800820`,
    warning: `#805000`,
    success: `#208030`,

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
    familyButton: `"Roboto Condensed", "Roboto", "Helvetica", "Arial", sans-serif`,

    // Font sizes
    size: `16px`,
    sizeButton: `14px`,

    // Font weights
    weight: 400,
    weightThin: 200,
    weightLight: 300,
    weightRegular: 400,
    weightMedium: 500,
    weightBold: 700,
    weightBlack: 900,
    weightButton: 600,
    
    // Font heights
    height: 1.333,
    heightButton: 1.25,

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
  },

  // Pixel Spacing
  space: (num1 = 2, num2, num3, num4) => {
    const pix = (num) => `${4 * num}px`;

    let pixSpace = [];
    if (num1 && typeof num1 === `number`) pixSpace.push(pix(num1));
    if (num2 && typeof num2 === `number`) pixSpace.push(pix(num2));
    if (num3 && typeof num3 === `number`) pixSpace.push(pix(num3));
    if (num4 && typeof num4 === `number`) pixSpace.push(pix(num4));
    return pixSpace.join(` `);
  },

  // Radius Options
  radius: {
    none: 0,
    button: `4px`,
    card: `8px`,
  },

  // Transition Options
  transition: {
    none: `none`,
    button: `all 0.15s ease-in-out`,
  },

  // Shadow Options
  shadow: {
    none: `none`,
    soft: `0 0 12px #00000016`,
    medium: `0 0 12px #00000024`,
    harsh: `0 0 12px #00000040`,
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

// EXPORT -------------------------------------------------- //

export default theme;
