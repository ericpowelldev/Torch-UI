//////////////////////// HOOK ////////////////////////

export default function useSpace() {
  /** Get the size of a space */
  const getSpaceSize = (size: number | string) => {
    let sizeNum = 4;
    if (typeof size === `number`) {
      sizeNum = size;
    } else if (typeof size === `string`) {
      if (size === `xxxs`) sizeNum = 0.5;
      if (size === `xxs`) sizeNum = 1;
      if (size === `xs`) sizeNum = 2;
      if (size === `sm`) sizeNum = 3;
      if (size === `md`) sizeNum = 4;
      if (size === `lg`) sizeNum = 6;
      if (size === `xl`) sizeNum = 8;
      if (size === `xxl`) sizeNum = 12;
      if (size === `xxxl`) sizeNum = 16;
    }
    return sizeNum;
  };

  // Return hook logic
  return { getSpaceSize };
}
