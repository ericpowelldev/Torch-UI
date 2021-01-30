//////////////////////// COMPONENT ////////////////////////
export default function Container(props) {
  const { size, fixed, noPad, style } = props;

  const getClass = () => {
    let cls = `container`;
    if (size) cls += ` ${size}`;
    if (fixed) cls += ` fixed`;
    if (noPad) cls += ` no-pad`;
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

  size
    false = Fluid max width (100%)
    xl = Extra large max width
    lg = Large max width
    md = Medium max width
    sm = Small max width
    xs = Extra small max width
  
  fixed
    false = Fluid max width at the size breakpoint
    true = Fixed max width at the size breakpoint

  noPad
    false = Standard padding
    true = Remove padding
*/
