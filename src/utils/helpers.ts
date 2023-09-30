// DEPENDENCIES -------------------------------------------------- //

import clsx from "clsx";

// HELPER FUNCTIONS -------------------------------------------------- //

/** Join CSS class strings
 * @param {object} classesObj - Object of CSS classes
 * @param {string} className - Name of CSS class within the classes object
 * @param {string} overrideClassName - CSS class override (Generally used for root className prop)
 */
const cls = (classesObj?: any, className?: string, overrideClassName?: string) => {
  return clsx(classesObj?.[className], overrideClassName);
};

// EXPORT -------------------------------------------------- //

export { cls };
