import React, { Fragment } from "react";
import useWindow from "../../libs/uses/window";
import seccss from "./styles/el-section.module.css";

export const Img = ({ id = "", className, style, alt = "", src = "/img/fallback.jpg", onClick = () => {} }) => {
  const compid = `${id}-image`;

  return <img id={compid} className={className} style={style} alt={alt} loading="lazy" src={src} onClick={onClick} />;
};

export const Form = ({
  id = "",
  ref,
  hasGlassMorph = false,
  className = "",
  style,
  display = "flex",
  flexDirection = "column",
  flex = "unset",
  flexShrink = "unset",
  flexWrap = false,
  wrapReverse = false,
  alignSelf = "unset",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  overflow = "hidden",
  position = "relative",
  top = "unset",
  bottom = "unset",
  left = "unset",
  right = "unset",
  transform = "unset",
  sWidth = "unset",
  maxWidth = "unset",
  minWidth = "unset",
  sHeight = "unset",
  maxHeight = "unset",
  minHeight = "unset",
  padding = "unset",
  margin = "unset",
  gap = "0.6rem",
  textAlign = "unset",
  border,
  borderRadius = "unset",
  backgroundColor = "transparent",
  onSubmit = () => {},
  children,
}) => {
  const formid = `${id}-form`;

  let overflowstyles = {};
  switch (overflow) {
    case "visible":
      overflowstyles = { overflow: "visible" };
      break;
    case "x":
      overflowstyles = { overflowX: "auto" };
      break;
    case "y":
      overflowstyles = { overflowY: "auto" };
      break;
    case "xy":
      overflowstyles = { overflow: "auto" };
      break;
    case "hidden":
      overflowstyles = { overflow: "hidden" };
      break;
  }

  const formstyles = {
    display,
    flexDirection: flexWrap ? "row" : flexDirection,
    flex,
    flexShrink,
    flexWrap: flexWrap ? (wrapReverse ? "wrap-reverse" : "wrap") : "unset",
    alignSelf,
    alignItems,
    justifyContent,
    position,
    top,
    bottom,
    left,
    right,
    transform,
    width: sWidth,
    minWidth,
    maxWidth,
    height: sHeight,
    minHeight,
    maxHeight,
    padding,
    margin,
    gap,
    textAlign,
    border: border ? border : undefined,
    borderRadius,
    backgroundColor: hasGlassMorph ? "var(--color-background-85)" : backgroundColor,
    ...overflowstyles,
  };

  return (
    <form ref={ref || null} id={formid} className={`${seccss.section} ${hasGlassMorph ? seccss.glass : ""} ${className}`} style={{ ...formstyles, ...style }} onSubmit={onSubmit}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Fragment) {
            return React.Children.map(child.props.children, (fragchild) => {
              if (React.isValidElement(fragchild)) {
                const combinedid = fragchild.props.id ? `${formid}-${fragchild.props.id}` : formid;
                return React.cloneElement(fragchild, { id: combinedid });
              } else return fragchild;
            });
          } else {
            const combinedid = child.props.id ? `${formid}-${child.props.id}` : formid;
            return React.cloneElement(child, { id: combinedid });
          }
        } else return child;
      })}
    </form>
  );
};

export const Grid = ({ id = "", style, childWidth = "12.5rem", children }) => {
  const gridid = `${id}-grid`;
  const gridstyles = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(${childWidth}, 1fr))`,
    ...style,
  };

  return (
    <div id={gridid} style={gridstyles}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Fragment) {
            return React.Children.map(child.props.children, (fragchild) => {
              if (React.isValidElement(fragchild)) {
                const combinedid = fragchild.props.id ? `${gridid}-${fragchild.props.id}` : gridid;
                return React.cloneElement(fragchild, { id: combinedid });
              } else return fragchild;
            });
          } else {
            const combinedid = child.props.id ? `${gridid}-${child.props.id}` : gridid;
            return React.cloneElement(child, { id: combinedid });
          }
        } else return child;
      })}
    </div>
  );
};

export const Header = ({
  id = "",
  className,
  style,
  display = "flex",
  flexDirection = "column",
  flex = "unset",
  flexWrap = false,
  wrapReverse = false,
  alignSelf = "stretch",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  overflow = "hidden",
  hWidth = "unset",
  maxWidth = "unset",
  minWidth = "unset",
  hHeight = "unset",
  minHeight = "unset",
  maxHeight = "unset",
  padding = "unset",
  margin = "unset",
  gap = "0.3rem",
  color = "var(--color-secondary)",
  backgroundColor = "transparent",
  children,
}) => {
  const headerid = `${id}-header`;
  const headerstyles = {
    display,
    flexDirection: flexWrap ? "row" : flexDirection,
    flex,
    flexWrap: flexWrap ? (wrapReverse ? "wrap-reverse" : "wrap") : "unset",
    alignSelf,
    alignItems,
    justifyContent,
    overflow,
    width: hWidth,
    minWidth,
    maxWidth,
    height: hHeight,
    minHeight,
    maxHeight,
    padding,
    margin,
    gap,
    color,
    backgroundColor,
  };

  return (
    <header id={headerid} className={className} style={{ ...headerstyles, ...style }}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Fragment) {
            return React.Children.map(child.props.children, (fragchild) => {
              if (React.isValidElement(fragchild)) {
                const combinedid = fragchild.props.id ? `${headerid}-${fragchild.props.id}` : headerid;
                return React.cloneElement(fragchild, { id: combinedid });
              } else return fragchild;
            });
          } else {
            const combinedid = child.props.id ? `${headerid}-${child.props.id}` : headerid;
            return React.cloneElement(child, { id: combinedid });
          }
        } else return child;
      })}
    </header>
  );
};

export const Section = ({
  id = "",
  ref,
  hasGlassMorph = false,
  className = "",
  style,
  display = "flex",
  flexDirection = "column",
  flex = "unset",
  flexShrink = "unset",
  flexWrap = false,
  wrapReverse = false,
  alignSelf = "unset",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  overflow = "hidden",
  scrollSnapType = "unset",
  scrollSnapAlign = "unset",
  position = "relative",
  top = "unset",
  bottom = "unset",
  left = "unset",
  right = "unset",
  transform = "unset",
  sWidth = "unset",
  maxWidth = "unset",
  minWidth = "unset",
  sHeight = "unset",
  maxHeight = "unset",
  minHeight = "unset",
  padding = "unset",
  margin = "unset",
  gap = "0.6rem",
  textAlign = "unset",
  border,
  borderRadius = "unset",
  backgroundColor = "transparent",
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  onTransitionEnd = () => {},
  children,
}) => {
  const sectionid = `${id}-section`;

  let overflowstyles = {};
  switch (overflow) {
    case "visible":
      overflowstyles = { overflow: "visible" };
      break;
    case "x":
      overflowstyles = { overflowX: "auto" };
      break;
    case "y":
      overflowstyles = { overflowY: "auto" };
      break;
    case "xy":
      overflowstyles = { overflow: "auto" };
      break;
    case "hidden":
      overflowstyles = { overflow: "hidden" };
      break;
  }

  const sectionstyles = {
    display,
    flexDirection: flexWrap ? "row" : flexDirection,
    flex,
    flexShrink,
    flexWrap: flexWrap ? (wrapReverse ? "wrap-reverse" : "wrap") : "unset",
    alignSelf,
    alignItems,
    justifyContent,
    position,
    top,
    bottom,
    left,
    right,
    transform,
    width: sWidth,
    minWidth,
    maxWidth,
    height: sHeight,
    minHeight,
    maxHeight,
    padding,
    margin,
    gap,
    textAlign,
    border: border ? border : undefined,
    borderRadius,
    backgroundColor: hasGlassMorph ? "var(--color-background-85)" : backgroundColor,
    scrollSnapType,
    scrollSnapAlign,
    ...overflowstyles,
  };

  return (
    <section ref={ref || null} id={sectionid} className={`${seccss.section} ${hasGlassMorph ? seccss.glass : ""} ${className}`} style={{ ...sectionstyles, ...style }} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onTransitionEnd={onTransitionEnd}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Fragment) {
            return React.Children.map(child.props.children, (fragchild) => {
              if (React.isValidElement(fragchild)) {
                const combinedid = fragchild.props.id ? `${sectionid}-${fragchild.props.id}` : sectionid;
                return React.cloneElement(fragchild, { id: combinedid });
              } else return fragchild;
            });
          } else {
            const combinedid = child.props.id ? `${sectionid}-${child.props.id}` : sectionid;
            return React.cloneElement(child, { id: combinedid });
          }
        } else return child;
      })}
    </section>
  );
};

export const Container = ({ id = "", className, style, display = "flex", flexDirection = "column", flex = "unset", flexWrap = false, alignSelf = "unset", alignItems = "flex-start", wrapReverse = false, justifyContent = "flex-start", overflow = "hidden", cWidth = "100%", maxWidth = "unset", minWidth = "unset", cHeight = "unset", maxHeight = "unset", minHeight = "unset", padding, gap = "1.8rem", textAlign = "unset", backgroundColor = "transparent", children }) => {
  const { width } = useWindow();

  const containerid = `${id}-container`;
  const containerstyles = {
    display,
    flexDirection: flexWrap ? "row" : flexDirection,
    flex,
    flexWrap: flexWrap ? (wrapReverse ? "wrap-reverse" : "wrap") : "unset",
    alignSelf,
    alignItems,
    justifyContent,
    overflow,
    width: cWidth,
    minWidth,
    maxWidth,
    height: cHeight,
    minHeight,
    maxHeight,
    padding: padding ? padding : width > 1200 ? "1.8rem 5.6rem" : width < 700 ? "1.8rem" : "1.8rem 3.7rem",
    gap,
    textAlign,
    backgroundColor,
  };

  return (
    <section id={containerid} className={className} style={{ ...containerstyles, ...style }}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Fragment) {
            return React.Children.map(child.props.children, (fragchild) => {
              if (React.isValidElement(fragchild)) {
                const combinedid = fragchild.props.id ? `${containerid}-${fragchild.props.id}` : containerid;
                return React.cloneElement(fragchild, { id: combinedid });
              } else return fragchild;
            });
          } else {
            const combinedid = child.props.id ? `${containerid}-${child.props.id}` : containerid;
            return React.cloneElement(child, { id: combinedid });
          }
        } else return child;
      })}
    </section>
  );
};

export const Page = ({ pageid, children }) => {
  const pagestyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    overflow: "hidden",
    width: "100%",
    minHeight: "100vh",
    background: "var(--color-background)",
  };

  return (
    <main id={pageid} style={pagestyles}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Fragment) {
            return React.Children.map(child.props.children, (fragchild) => {
              if (React.isValidElement(fragchild)) {
                const combinedid = fragchild.props.id ? `${pageid}-${fragchild.props.id}` : pageid;
                return React.cloneElement(fragchild, { id: combinedid });
              } else return fragchild;
            });
          } else {
            const combinedid = child.props.id ? `${pageid}-${child.props.id}` : pageid;
            return React.cloneElement(child, { id: combinedid });
          }
        } else return child;
      })}
    </main>
  );
};
