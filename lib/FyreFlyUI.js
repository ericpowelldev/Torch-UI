import React from "react";

/** FyreFlyUI Main Theme Object */
const mainTheme = {
  // Colors
  color: {
    // Main
    main: `#24a0ff`,
    mainLight: `#64c8ff`,
    mainTrans0: `#24a0ff00`,
    mainTrans1: `#24a0ff0c`,
    mainTrans2: `#24a0ff18`,
    mainTrans3: `#24a0ff24`,
    mainTrans4: `#24a0ff30`,
    mainTrans5: `#24a0ff40`,
    mainTrans6: `#24a0ff60`,
    mainTrans7: `#24a0ff80`,

    // Alternate
    alt1: `#ff4080`,
    alt2: `#ffc840`,
    alt3: `#20dc80`,

    // Settings
    info: `#2080ff`,
    error: `#ff2040`,
    warning: `#ffd420`,
    success: `#40d420`,

    // White
    white: `#ffffff`,
    whiteTrans0: `#ffffff00`,
    whiteTrans1: `#ffffff0c`,
    whiteTrans2: `#ffffff18`,
    whiteTrans3: `#ffffff24`,
    whiteTrans4: `#ffffff30`,
    whiteTrans5: `#ffffff40`,
    whiteTrans6: `#ffffff60`,
    whiteTrans7: `#ffffff80`,

    // Black
    black: `#000000`,
    blackTrans0: `#00000000`,
    blackTrans1: `#0000000c`,
    blackTrans2: `#00000018`,
    blackTrans3: `#00000024`,
    blackTrans4: `#00000030`,
    blackTrans5: `#00000040`,
    blackTrans6: `#00000060`,
    blackTrans7: `#00000080`,

    // Foreground
    fg1: `#202430`,
    fg2: `#202430a0`,
    fg3: `#20243080`,
    fg4: `#20243040`,
    fgc1: `#ffffff`,
    fgc2: `#e8eeffa0`,
    fgc3: `#e8eeff80`,
    fgc4: `#e8eeff40`,

    // Background
    fg1: `#fafafa`,
    fg2: `#f5f5f5`,
    fg3: `#f0f0f0`,
    fg4: `#ebebeb`,
    fgc1: `#101216`,
    fgc2: `#181b20`,
    fgc3: `#202428`,
    fgc4: `#282d32`,
  },
  // Text
  txt: {
    fontFamily: `"Poppins", sans-serif`,
    fontSize: `16px`,
    fontWeight: `300`,
    h1: {
      size: `48px`,
      weight: `700`,
      height: `1.5`,
    },
    h2: {
      size: `40px`,
      weight: `700`,
      height: `1.5`,
    },
    h3: {
      size: `32px`,
      weight: `700`,
      height: `1.5`,
    },
    h4: {
      size: `28px`,
      weight: `600`,
      height: `1.5`,
    },
    h5: {
      size: `24px`,
      weight: `500`,
      height: `1.5`,
    },
    h6: {
      size: `20px`,
      weight: `500`,
      height: `1.5`,
    },
    p: {
      size: `16px`,
      weight: `300`,
      height: `1.75`,
    },
  },
  // Shadows
  shadow: {
    none: ``,
    xs: `0 0 6px rgba(0, 0, 0, 0.14)`,
    sm: `0 0 12px rgba(0, 0, 0, 0.125)`,
    md: `0 0 18px rgba(0, 0, 0, 0.115)`,
    lg: `0 0 24px rgba(0, 0, 0, 0.11)`,
    xl: `0 0 32px rgba(0, 0, 0, 0.1)`,
    txt: `1px 1px 4px rgba(0, 0, 0, 0.2)`,
  },
  // Transitions
  trans: {
    fast: `all 0.1s ease-out`,
    main: `all 0.15s ease-out`,
    alt: `all 0.3s ease-out`,
    slow: `all 0.5s ease-out`,
  },
  // Border-Radius
  radius: `6px`,
  // Base Spacing
  spacing: (num) => `${4 * num}px`,
  // Z-Index
  zIndex: {
    footer: `900`,
    header: `1000`,
    dropdown: `1100`,
    modal: `1500`,
    modalDropdown: `1600`,
    tooltip: `2000`,
  },
  // Breakpoints
  break: {
    zero: `0px`,
    xs: {
      up: `480px`,
      down: `480px`,
    },
    sm: {
      up: `768px`,
      down: `768px`,
    },
    md: {
      up: `1024px`,
      down: `1024px`,
    },
    lg: {
      up: `1280px`,
      down: `1280px`,
    },
    xl: {
      up: `1600px`,
      down: `1600px`,
    },
  },
  // Container Max-Widths
  container: {
    xs: `420px`,
    sm: `680px`,
    md: `960px`,
    lg: `1200px`,
    xl: `1400px`,
  },
  // Column Width Percentages
  percent1: `8.333%`,
  percent2: `16.666%`,
  percent3: `25%`,
  percent4: `33.333%`,
  percent5: `41.666%`,
  percent6: `50%`,
  percent7: `58.333%`,
  percent8: `66.666%`,
  percent9: `75%`,
  percent10: `83.333%`,
  percent11: `91.666%`,
  percent12: `100%`,
};

/** FyreFlyUI Layout Theme Object */
const layoutTheme = {
  // Media Breakpoint Handling
  layout: {
    zero: `@media only screen and (min-width: ${mainTheme?.break?.zero})`,
    xs: {
      up: `@media only screen and (min-width: ${mainTheme?.break?.xs?.up})`,
      down: `@media only screen and (max-width: ${mainTheme?.break?.xs?.down})`,
    },
    sm: {
      up: `@media only screen and (min-width: ${mainTheme?.break?.sm?.up})`,
      down: `@media only screen and (max-width: ${mainTheme?.break?.sm?.down})`,
    },
    md: {
      up: `@media only screen and (min-width: ${mainTheme?.break?.md?.up})`,
      down: `@media only screen and (max-width: ${mainTheme?.break?.md?.down})`,
    },
    lg: {
      up: `@media only screen and (min-width: ${mainTheme?.break?.lg?.up})`,
      down: `@media only screen and (max-width: ${mainTheme?.break?.lg?.down})`,
    },
    xl: {
      up: `@media only screen and (min-width: ${mainTheme?.break?.xl?.up})`,
      down: `@media only screen and (max-width: ${mainTheme?.break?.xl?.down})`,
    },
  },
};

/** FyreFlyUI Light Theme Object */
const lightTheme = {};

/** FyreFlyUI Dark Theme Object */
const darkTheme = {};

/** FyreFlyUI Context Object */
export const FyreFlyUI = React.createContext();

/** FyreFlyUI Context Provider */
export function FyreFlyUIProvider({ children }) {
  const [theme, setTheme] = React.useState({ ...mainTheme, ...layoutTheme, ...lightTheme });

  const handleSetTheme = (str) => {
    if (str === `dark`) setTheme({ ...mainTheme, ...layoutTheme, ...darkTheme });
    else setTheme({ ...mainTheme, ...layoutTheme, ...lightTheme });
  };

  /** FyreFlyUI context for the app */
  const ctx = {
    theme: theme,
    handleSetTheme: handleSetTheme,
  };

  // Return the FyreFlyUI.Provider and wrap it around the contents of App.js
  return <FyreFlyUI.Provider value={ctx}>{children}</FyreFlyUI.Provider>;
}
