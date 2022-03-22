//////////////////////// HOOK ////////////////////////

export function useLoadingIcon() {
  /** Get the size of the spinner track */
  const getTrackSize = (size) => {
    if (size > 48) return size / 8;
    if (size > 36) return size / 6;
    if (size > 24) return size / 5;
    if (size > 12) return size / 4;
    return size / 2;
  };

  // Return hook logic
  return { getTrackSize };
}
