const SUPPORTED_LANGUAGES = ["en", "id"];

export const getUserLanguage = () => {
  const savedLang = localStorage.getItem("selaras_app_language") || null;
  if (savedLang) return savedLang;

  let browserLang;
  const navigatorLang = navigator.language || navigator.userLanguage || null;
  if (navigatorLang) browserLang = navigatorLang.split("-")[0];
  if (browserLang && SUPPORTED_LANGUAGES.includes(browserLang)) return browserLang;

  return "en";
};
