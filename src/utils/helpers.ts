//////////////////////// DEPENDENCIES ////////////////////////

import clsx from "clsx";

//////////////////////// HELPER FUNCTIONS ////////////////////////

/** Join classNames */
const joinClassNames = (classes?: any, name?: string, rootClassName?: string) => {
  return clsx(classes?.[name], rootClassName);
};

//////////////////////// EXPORT ////////////////////////

export { joinClassNames };
