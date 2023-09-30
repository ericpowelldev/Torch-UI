// HOOK -------------------------------------------------- //

export default function useButton() {
  /** Get solid and link padding from size prop */
  const getRootPadding = (size: string) => {
    if (size === `xs` || size === `min`) return `4px 6px`;
    if (size === `sm`) return `6px 9px`;
    if (size === `md`) return `8px 12px`;
    if (size === `lg`) return `10px 15px`;
    if (size === `xl` || size === `max`) return `12px 18px`;
    return `8px 12px`;
  };

  /** Get outline padding from size prop */
  const getOutlinePadding = (size: string) => {
    if (size === `xs` || size === `min`) return `3px 5px`;
    if (size === `sm`) return `5px 8px`;
    if (size === `md`) return `7px 11px`;
    if (size === `lg`) return `9px 14px`;
    if (size === `xl` || size === `max`) return `11px 17px`;
    return `7px 11px`;
  };

  /** Get label size from size prop */
  const getLabelSize = (size: string) => {
    if (size === `xs` || size === `min`) return 12;
    if (size === `sm`) return 13;
    if (size === `md`) return 14;
    if (size === `lg`) return 15;
    if (size === `xl` || size === `max`) return 16;
    return 14;
  };

  /** Get icon size from size prop */
  const getIconSize = (size: string) => {
    if (size === `xs` || size === `min`) return 15;
    if (size === `sm`) return 17;
    if (size === `md`) return 18;
    if (size === `lg`) return 19;
    if (size === `xl` || size === `max`) return 21;
    return 18;
  };

  /** Get label weight from variant prop */
  const getLabelWeight = (variant: string) => {
    if (variant === `outline`) return 500;
    return 600;
  };

  // Return hook logic
  return { getRootPadding, getOutlinePadding, getLabelSize, getIconSize, getLabelWeight };
}
