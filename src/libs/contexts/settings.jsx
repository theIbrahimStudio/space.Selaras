import React, { createContext, useContext, useEffect, useState } from "react";
import useStorage from "../uses/storage";

const defaultSettings = {
  theme: "dark",
  accessibility_mode: "",
  language_code: "en",
};

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const { setItem, getItem } = useStorage();

  const storedSettings = getItem("selaras_app_settings") || defaultSettings;

  const [settings, setSettings] = useState(storedSettings);
  const [lang, setLang] = useState(storedSettings.language_code);

  useEffect(() => {
    setItem("selaras_app_settings", settings);
  }, [settings]);

  useEffect(() => {
    if (settings.language_code !== lang) setSettings((prev) => ({ ...prev, language_code: lang }));
  }, [lang]);

  return <SettingsContext value={{ settings, setSettings, lang, setLang }}>{children}</SettingsContext>;
};

const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used within a SettingsProvider");
  return context;
};

export default useSettings;
