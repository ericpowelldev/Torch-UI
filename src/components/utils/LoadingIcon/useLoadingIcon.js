//////////////////////// HOOK ////////////////////////

export function useLoadingIcon() {
  /** Get the size of the spinner track */
  const getTrackSize = (size) => {
    if (size > 48) return `${size / 8}px`;
    if (size > 36) return `${size / 6}px`;
    if (size > 24) return `${size / 5}px`;
    if (size > 12) return `${size / 4}px`;
    return `${size / 2}px`;
  };

  // Return hook logic
  return { getTrackSize };
}
