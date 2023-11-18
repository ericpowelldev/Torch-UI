// DEPENDENCIES -------------------------------------------------- //

const { flattenTheme, insertRaw, insertComment } = require("./helpers");

const css_Root = require("../../components/_app/Root/css_Root");
const css_General = require("../../components/_app/General/css_General");

const css_ButtonBase = require("../../components/buttons/ButtonBase/css_ButtonBase");
const css_Button = require("../../components/buttons/Button/css_Button");
// const css_Text = require( "../../components/text/Text/css_Text");

// ORCHESTRATION -------------------------------------------------- //

const css_compile = (theme) => {
  // Initialize the master string
  let masterStr = insertComment(`Generated using the Torch UI - CSS Engine`, false);

  // Flatten the theme object for ease of use
  let flattenedTheme = flattenTheme(theme);

  // Theme & Variables
  masterStr += insertComment(`TUI - Theme & Variables`);
  masterStr += css_Root(flattenedTheme);

  // General CSS
  masterStr += insertComment(`TUI - General`);
  masterStr += css_General(flattenedTheme);

  // Component CSS
  masterStr += insertComment(`TUI - ButtonBase`);
  masterStr += css_ButtonBase(flattenedTheme);

  masterStr += insertComment(`TUI - Button`);
  masterStr += css_Button(flattenedTheme);

  // masterStr += insertComment(`TUI - Text`);
  // masterStr += css_Text(flattenedTheme);

  // Return the master string
  return masterStr;
};

// EXPORT -------------------------------------------------- //

module.exports = css_compile;
