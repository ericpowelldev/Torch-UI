// HOOK -------------------------------------------------- //

export default function useButton() {
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
    if (size === `xs` || size === `min`) return 12;
    if (size === `sm`) return 13;
    if (size === `md`) return 14;
    if (size === `lg`) return 15;
    if (size === `xl` || size === `max`) return 16;
    return 14;
  };

  /** Get button icon size from size prop */
  const getIconSize = (size) => {
    if (size === `xs` || size === `min`) return 15;
    if (size === `sm`) return 17;
    if (size === `md`) return 18;
    if (size === `lg`) return 19;
    if (size === `xl` || size === `max`) return 21;
    return 18;
  };

  // Return hook logic
  return { getRootPadding, getLabelSize, getIconSize };
}
