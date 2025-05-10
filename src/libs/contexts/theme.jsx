import React, { createContext, useContext, useEffect, useState } from "react";
import useStorage from "../uses/storage";

const baseThemes = ["dark", "light"];
const modeThemes = ["", "colorblind", "creative", "developer"];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { setItem, getItem } = useStorage();

  const storedSettings = getItem("selaras_app_settings") || {};
  const storedBaseTheme = storedSettings.theme || "dark";
  const storedMode = storedSettings.accessibility_mode || "";

  const [baseTheme, setBaseTheme] = useState(storedBaseTheme);
  const [mode, setMode] = useState(storedMode);

  useEffect(() => {
    const appliedTheme = mode ? `${baseTheme}-${mode}` : baseTheme;
    document.documentElement.setAttribute("data-theme", appliedTheme);

    const updatedSettings = { ...storedSettings, theme: baseTheme, accessibility_mode: mode };
    setItem("selaras_app_settings", updatedSettings);
  }, [baseTheme, mode]);

  return <ThemeContext value={{ baseTheme, setBaseTheme, mode, setMode, baseThemes, modeThemes }}>{children}</ThemeContext>;
};

const useTheme = () => useContext(ThemeContext);

export default useTheme;
