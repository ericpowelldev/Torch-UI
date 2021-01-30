//////////////////////// COMPONENT ////////////////////////
export default function Flex(props) {
  const { parent, justify, alignItems, alignContent, direction, wrap, spacing, child, xl, lg, md, sm, xs, style } = props;

  const getClass = () => {
    let cls = ``;
    if (parent) {
      cls += ` flex-parent`;
      if (justify) cls += ` justify-${justify}`;
      if (alignItems) cls += ` align-items-${alignItems}`;
      if (alignContent) cls += ` align-content-${alignContent}`;
      if (direction) cls += ` direction-${direction}`;
      if (wrap) cls += ` wrap`;
      if (spacing) cls += ` spacing-${spacing}`;
    }
    if (child) {
      cls += ` flex-child`;
      if (xl && xl >= 1 && xl <= 12) cls += ` xl-${xl}`;
      if (lg && lg >= 1 && lg <= 12) cls += ` lg-${lg}`;
      if (md && md >= 1 && md <= 12) cls += ` md-${md}`;
      if (sm && sm >= 1 && sm <= 12) cls += ` sm-${sm}`;
      if (xs && xs >= 1 && xs <= 12) cls += ` xs-${xs}`;
    }
    return cls;
  };

  return (
    <div className={getClass()} style={style}>
      {props.children}
    </div>
  );
}

/*
  DOCS

  parent
    false = Div is not a flex container
    true = Div is a flex container
  
  child
    false = Div is not a flex container child
    true = Div is not a flex container child
*/
