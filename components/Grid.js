//////////////////////// COMPONENT ////////////////////////
export default function Grid(props) {
  const { parent, rows, cols, spacing, child, area, style } = props;

  const getClass = () => {
    let cls = ``;
    if (parent) {
      cls += ` grid-parent`;
      if (rows && rows >= 1 && rows <= 12) cls += ` rows-${rows}`;
      if (cols && cols >= 1 && cols <= 12) cls += ` cols-${cols}`;
      if (spacing && spacing >= 1 && spacing <= 12) cls += ` spacing-${spacing}`;
    }
    if (child) {
      cls += ` grid-child`;
    }
    return cls;
  };

  const getStyle = () => {
    let newStyle = {};
    if (child) {
      if (area) newStyle.gridArea = area;
    }
    return { ...newStyle, ...style };
  };

  return (
    <div className={getClass()} style={getStyle()}>
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
