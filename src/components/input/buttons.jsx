import React from "react";
import tabcss from "./styles/button-tab.module.css";

export const Tab = ({ id = "", isActive = false, onClick = () => {}, children }) => {
  const compid = `${id}-tab-button`;

  return (
    <button id={compid} className={`${tabcss.button} ${isActive ? tabcss.active : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};
