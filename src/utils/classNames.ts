/** Join root classNames */
const joinClassNames_root = (classes: any, name: string, rootClassName: string) => {
  let classNames = [];
  if (rootClassName) classNames.push(rootClassName);
  if (classes && classes.root) classNames.push(classes.root);
  if (classes && name && classes[name]) classNames.push(classes[name]);
  return classNames.join(` `);
};

/** Join classNames */
const joinClassNames = (classes: any, name: string) => {
  let classNames = [];
  if (classes && name && classes[name]) classNames.push(classes[name]);
  return classNames.join(` `);
};

export { joinClassNames_root, joinClassNames };
