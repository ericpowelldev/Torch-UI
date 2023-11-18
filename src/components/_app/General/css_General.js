// DEPENDENCIES -------------------------------------------------- //

const { themeVar } = require("../../../utils/css-engine/helpers");

// MAIN ENTRY -------------------------------------------------- //

/** Build the General App CSS */
const css_General = (flattenedTheme) => {
  // Initialize CSS string
  let str = ``;

  // Insert HTML CSS
  str += `html{`;
  str += `scroll-behavior:smooth;`;
  str += `}`;

  // Insert Body CSS
  str += `body{`;
  str += `font-family:${themeVar(`text.family`)};`;
  str += `font-size:${themeVar(`text.size`)};`;
  str += `font-weight:${themeVar(`text.weight`)};`;
  str += `line-height:${themeVar(`text.height`)};`;
  str += `background:${themeVar(`color.bg.0`)};`;
  str += `color:${themeVar(`color.fg.0`)};`;
  str += `overflow:overlay;`;
  str += `}`;

  // Insert Header 1 CSS
  str += `h1{`;
  str += `font-size:${themeVar(`text.h1.size`)};`;
  str += `font-weight:${themeVar(`text.h1.weight`)};`;
  str += `line-height:${themeVar(`text.h1.height`)};`;
  str += `}`;

  // Insert Header 2 CSS
  str += `h2{`;
  str += `font-size:${themeVar(`text.h2.size`)};`;
  str += `font-weight:${themeVar(`text.h2.weight`)};`;
  str += `line-height:${themeVar(`text.h2.height`)};`;
  str += `}`;

  // Insert Header 3 CSS
  str += `h3{`;
  str += `font-size:${themeVar(`text.h3.size`)};`;
  str += `font-weight:${themeVar(`text.h3.weight`)};`;
  str += `line-height:${themeVar(`text.h3.height`)};`;
  str += `}`;

  // Insert Header 4 CSS
  str += `h4{`;
  str += `font-size:${themeVar(`text.h4.size`)};`;
  str += `font-weight:${themeVar(`text.h4.weight`)};`;
  str += `line-height:${themeVar(`text.h4.height`)};`;
  str += `}`;

  // Insert Header 5 CSS
  str += `h5{`;
  str += `font-size:${themeVar(`text.h5.size`)};`;
  str += `font-weight:${themeVar(`text.h5.weight`)};`;
  str += `line-height:${themeVar(`text.h5.height`)};`;
  str += `}`;

  // Insert Header 6 CSS
  str += `h6{`;
  str += `font-size:${themeVar(`text.h6.size`)};`;
  str += `font-weight:${themeVar(`text.h6.weight`)};`;
  str += `line-height:${themeVar(`text.h6.height`)};`;
  str += `}`;

  // Insert Paragraph CSS
  str += `p{`;
  str += `font-size:${themeVar(`text.size`)};`;
  str += `font-weight:${themeVar(`text.weight`)};`;
  str += `line-height:${themeVar(`text.height`)};`;
  str += `}`;

  // Return the string
  return str;
};

// EXPORT -------------------------------------------------- //

module.exports = css_General;
