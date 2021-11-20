//////////////////////// HOOK ////////////////////////

export function useButton() {
  /** Get solid and link padding from size prop */
  const getRootPadding = (size) => {
    if (size === `xs` || size === `min`) return `4px 8px`;
    if (size === `sm`) return `6px 12px`;
    if (size === `lg`) return `10px 20px`;
    if (size === `xl` || size === `max`) return `12px 24px`;
    return `8px 16px`;
  };

  /** Get hover-line height from size prop */
  const getSolidHoverHeight = (size) => {
    if (size === `xs` || size === `min`) return 2;
    if (size === `sm`) return 3;
    if (size === `lg`) return 5;
    if (size === `xl` || size === `max`) return 6;
    return 4;
  };

  /** Get outline padding from size prop */
  const getOutlinePadding = (size) => {
    if (size === `xs` || size === `min`) return `3px 7px`;
    if (size === `sm`) return `5px 11px`;
    if (size === `lg`) return `9px 19px`;
    if (size === `xl` || size === `max`) return `11px 23px`;
    return `7px 15px`;
  };

  /** Get label size from size prop */
  const getLabelSize = (size) => {
    if (size === `xs` || size === `min`) return 12;
    if (size === `sm`) return 13;
    if (size === `lg`) return 15;
    if (size === `xl` || size === `max`) return 16;
    return 14;
  };

  /** Get icon size from size prop */
  const getIconSize = (size) => {
    if (size === `xs` || size === `min`) return 15;
    if (size === `sm`) return 17;
    if (size === `lg`) return 19;
    if (size === `xl` || size === `max`) return 21;
    return 18;
  };

  /** Get label weight from variant prop */
  const getLabelWeight = (variant) => {
    if (variant === `outline`) return 500;
    return 600;
  };

  // Return hook logic
  return { getRootPadding, getSolidHoverHeight, getOutlinePadding, getLabelSize, getIconSize, getLabelWeight };
}
