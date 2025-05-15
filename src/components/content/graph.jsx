import React, { Fragment } from "react";

const useGraph = () => {
  const getGraph = (flex, position, alignSelf, opacity, width, minWidth, maxWidth, height, minHeight, maxHeight, margin, textAlign, variant, ellipsed, lineClamp, fontWeight, fontFamily, lineHeight = "normal", letterSpacing = "normal", color, textDecoration, textWrap, whiteSpace, cursor) => {
    const fontSizes = {
      xlarge: "3.125rem",
      large: "2.1875rem",
      medium: "1.5625rem",
      small: "1.125rem",
      xsmall: "1rem",
      tiny: "0.875rem",
      ant: "0.75rem",
    };

    const lineHeights = {
      xlarge: "1.15",
      large: "1.2",
      medium: "1.3",
      small: "1.5",
      xsmall: "1.6",
      tiny: "1.6",
      ant: "1.7",
    };

    const letterSpacings = {
      xlarge: "-0.015em",
      large: "-0.01em",
      medium: "-0.005em",
      small: "0em",
      xsmall: "0.005em",
      tiny: "0.01em",
      ant: "0.015em",
    };

    const fontFamilies = {
      brand: "'Zen Dots', sans-serif",
      display: "'Syne', sans-serif",
      text: "'Inter', sans-serif",
      mono: "'Fira Code', monospace",
    };

    const fontWeights = {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    };

    const styles = {
      display: ellipsed ? "-webkit-inline-box" : "inline",
      flex: flex || "unset",
      position: position || "relative",
      alignSelf: alignSelf || "unset",
      opacity: opacity || "1",
      width: width || "unset",
      minWidth: minWidth || "unset",
      maxWidth: maxWidth || "unset",
      height: height || "unset",
      minHeight: minHeight || "unset",
      maxHeight: maxHeight || "unset",
      margin: margin || "unset",
      textAlign: textAlign || "left",
      fontSize: fontSizes[variant],
      fontWeight: fontFamily === "brand" ? "400" : fontWeights[fontWeight],
      fontFamily: fontFamilies[fontFamily],
      fontOpticalSizing: "auto",
      lineHeight: lineHeight === "normal" ? lineHeights[variant] : lineHeight,
      letterSpacing: letterSpacing === "normal" ? letterSpacings[variant] : letterSpacing,
      color: color || "inherit",
      overflow: ellipsed ? "hidden" : "unset",
      textDecoration: textDecoration || "normal",
      textOverflow: ellipsed ? "ellipsis" : "unset",
      lineClamp: ellipsed ? lineClamp : "unset",
      webkitLineClamp: ellipsed ? lineClamp : "unset",
      webkitBoxOrient: ellipsed ? "vertical" : "unset",
      textWrap: textWrap || "unset",
      whiteSpace: whiteSpace || "unset",
      cursor: cursor || "default",
    };

    return styles;
  };

  const H1 = ({ id = "", flex, position, alignSelf, opacity, width, minWidth, maxWidth, height, minHeight, maxHeight, margin, textAlign, variant = "xlarge", ellipsed = false, lineClamp, fontWeight = "bold", fontFamily = "display", lineHeight, letterSpacing, color, textDecoration, textWrap, whiteSpace, cursor, children, onClick = () => {}, onMouseEnter = () => {}, onMouseLeave = () => {} }) => {
    const compid = `${id}-h1`;

    return (
      <h1 id={compid} style={getGraph(flex, position, alignSelf, opacity, width, minWidth, maxWidth, height, minHeight, maxHeight, margin, textAlign, variant, ellipsed, lineClamp, fontWeight, fontFamily, lineHeight, letterSpacing, color, textDecoration, textWrap, whiteSpace, cursor)} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type === Fragment) {
              return React.Children.map(child.props.children, (frag_child) => {
                if (React.isValidElement(frag_child)) {
                  const combinedid = frag_child.props.id ? `${compid}-${frag_child.props.id}` : compid;
                  const additionalProps = frag_child.type === Span ? { variant, fontWeight, fontFamily } : {};
                  return React.cloneElement(frag_child, { id: combinedid, ...additionalProps });
                } else return frag_child;
              });
            } else {
              const combinedid = child.props.id ? `${compid}-${child.props.id}` : compid;
              const additionalProps = child.type === Span ? { variant, fontWeight, fontFamily } : {};
              return React.cloneElement(child, { id: combinedid, ...additionalProps });
            }
          } else return child;
        })}
      </h1>
    );
  };

  const H2 = ({ id = "", flex, position, alignSelf, opacity, width, minWidth, maxWidth, height, minHeight, maxHeight, margin, textAlign, variant = "large", ellipsed = false, lineClamp, fontWeight = "bold", fontFamily = "display", lineHeight, letterSpacing, color, textDecoration, textWrap, whiteSpace, cursor, children, onClick = () => {}, onMouseEnter = () => {}, onMouseLeave = () => {} }) => {
    const compid = `${id}-h2`;

    return (
      <h2 id={compid} style={getGraph(flex, position, alignSelf, opacity, width, minWidth, maxWidth, height, minHeight, maxHeight, margin, textAlign, variant, ellipsed, lineClamp, fontWeight, fontFamily, lineHeight, letterSpacing, color, textDecoration, textWrap, whiteSpace, cursor)} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type === Fragment) {
              return React.Children.map(child.props.children, (frag_child) => {
                if (React.isValidElement(frag_child)) {
                  const combinedid = frag_child.props.id ? `${compid}-${frag_child.props.id}` : compid;
                  const additionalProps = frag_child.type === Span ? { variant, fontWeight, fontFamily } : {};
                  return React.cloneElement(frag_child, { id: combinedid, ...additionalProps });
                } else return frag_child;
              });
            } else {
              const combinedid = child.props.id ? `${compid}-${child.props.id}` : compid;
              const additionalProps = child.type === Span ? { variant, fontWeight, fontFamily } : {};
              return React.cloneElement(child, { id: combinedid, ...additionalProps });
            }
          } else return child;
        })}
      </h2>
    );
  };

  const H3 = ({ id = "", flex, position, alignSelf, opacity, width, minWidth, maxWidth, height, minHeight, maxHeight, margin, textAlign, variant = "medium", ellipsed = false, lineClamp, fontWeight = "semibold", fontFamily = "display", lineHeight, letterSpacing, color, textDecoration, textWrap, whiteSpace, cursor, children, onClick = () => {}, onMouseEnter = () => {}, onMouseLeave = () => {} }) => {
    const compid = `${id}-h3`;

    return (
      <h3 id={compid} style={getGraph(flex, position, alignSelf, opacity, width, minWidth, maxWidth, height, minHeight, maxHeight, margin, textAlign, variant, ellipsed, lineClamp, fontWeight, fontFamily, lineHeight, letterSpacing, color, textDecoration, textWrap, whiteSpace, cursor)} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type === Fragment) {
              return React.Children.map(child.props.children, (frag_child) => {
                if (React.isValidElement(frag_child)) {
                  const combinedid = frag_child.props.id ? `${compid}-${frag_child.props.id}` : compid;
                  const additionalProps = frag_child.type === Span ? { variant, fontWeight, fontFamily } : {};
                  return React.cloneElement(frag_child, { id: combinedid, ...additionalProps });
                } else return frag_child;
              });
            } else {
              const combinedid = child.props.id ? `${compid}-${child.props.id}` : compid;
              const additionalProps = child.type === Span ? { variant, fontWeight, fontFamily } : {};
              return React.cloneElement(child, { id: combinedid, ...additionalProps });
            }
          } else return child;
        })}
      </h3>
    );
  };

  const Span = ({ id = "", flex, position, alignSelf, opacity, width, minWidth, maxWidth, height, minHeight, maxHeight, margin, textAlign, variant = "small", ellipsed = false, lineClamp, fontWeight = "normal", fontFamily = "text", lineHeight, letterSpacing, color, textDecoration, textWrap, whiteSpace, cursor, children, onClick = () => {}, onMouseEnter = () => {}, onMouseLeave = () => {} }) => {
    const compid = `${id}-span`;

    return (
      <span id={compid} style={getGraph(flex, position, alignSelf, opacity, width, minWidth, maxWidth, height, minHeight, maxHeight, margin, textAlign, variant, ellipsed, lineClamp, fontWeight, fontFamily, lineHeight, letterSpacing, color, textDecoration, textWrap, whiteSpace, cursor)} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </span>
    );
  };

  const P = ({ id = "", flex, position, alignSelf, opacity, width, minWidth, maxWidth, height, minHeight, maxHeight, margin, textAlign, variant = "small", ellipsed = false, lineClamp, fontWeight = "normal", fontFamily = "text", lineHeight, letterSpacing, color, textDecoration, textWrap, whiteSpace, cursor, children, onClick = () => {}, onMouseEnter = () => {}, onMouseLeave = () => {} }) => {
    const compid = `${id}-paragraph`;

    return (
      <p id={compid} style={getGraph(flex, position, alignSelf, opacity, width, minWidth, maxWidth, height, minHeight, maxHeight, margin, textAlign, variant, ellipsed, lineClamp, fontWeight, fontFamily, lineHeight, letterSpacing, color, textDecoration, textWrap, whiteSpace, cursor)} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type === Fragment) {
              return React.Children.map(child.props.children, (frag_child) => {
                if (React.isValidElement(frag_child)) {
                  const combinedid = frag_child.props.id ? `${compid}-${frag_child.props.id}` : compid;
                  const additionalProps = frag_child.type === Span ? { variant, fontWeight, fontFamily } : {};
                  return React.cloneElement(frag_child, { id: combinedid, ...additionalProps });
                } else return frag_child;
              });
            } else {
              const combinedid = child.props.id ? `${compid}-${child.props.id}` : compid;
              const additionalProps = child.type === Span ? { variant, fontWeight, fontFamily } : {};
              return React.cloneElement(child, { id: combinedid, ...additionalProps });
            }
          } else return child;
        })}
      </p>
    );
  };

  return { H1, H2, H3, Span, P };
};

export default useGraph;
