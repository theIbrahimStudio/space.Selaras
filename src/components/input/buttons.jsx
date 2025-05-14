import { useState } from "react";
import * as Icon from "../content/icons";
import tabcss from "./styles/button-tab.module.css";
import pricss from "./styles/button-primary.module.css";
import mrecss from "./styles/button-more.module.css";

export const Tab = ({ id = "", isActive = false, onClick = () => {}, children }) => {
  const compid = `${id}-tab-button`;

  return (
    <button id={compid} className={`${tabcss.button} ${isActive ? tabcss.active : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

export const Primary = ({ id = "", childtype = "text", variant = "fill", size = "regular", leadingContent = null, trailingContent = null, onClick = () => {}, children }) => {
  const compid = `${id}-primary-button`;

  const basestyles = {
    height: size === "small" ? "2.5rem" : "3.1rem",
    minWidth: size === "small" ? "2.5rem" : "3.1rem",
    padding: leadingContent ? "0 1.2rem 0 0.9rem" : trailingContent ? "0 0.9rem 0 1.2rem" : "0 1.2rem",
  };

  const iconstyles = {
    width: size === "small" ? "2.5rem" : "3.1rem",
  };

  return (
    <button id={compid} className={`${pricss.button} ${pricss[variant]}`} style={childtype === "icon" ? { ...basestyles, ...iconstyles } : basestyles} onClick={onClick}>
      {leadingContent}
      {children}
      {trailingContent}
    </button>
  );
};

export const CTA = ({ id = "", onClick = () => {}, children }) => {
  const [hovered, setHovered] = useState(false);

  const compid = `${id}-primary-button`;

  const basestyles = {
    height: "3.1rem",
    minWidth: "3.1rem",
    padding: "0 0.9rem 0 1.2rem",
  };

  return (
    <button id={compid} className={`${pricss.button} ${pricss.fill}`} style={basestyles} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick}>
      {children}
      <Icon.CtaArrow size="1.5rem" active={hovered} />
    </button>
  );
};

export const More = ({ id = "", children }) => {
  const compid = `${id}-more-button`;

  return (
    <button id={compid} className={mrecss.button}>
      {children}
    </button>
  );
};
