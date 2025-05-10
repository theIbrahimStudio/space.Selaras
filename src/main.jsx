import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SettingsProvider } from "./libs/contexts/settings";
import { ThemeProvider } from "./libs/contexts/theme";
// import { TellsProvider } from "./libs/contexts/tell";
import { OverlayProvider } from "./libs/contexts/overlay";
// import { LoadingProvider } from "./libs/contexts/loading";
import { ApiProvider } from "./libs/contexts/api";
import App from "./App.jsx";
import "./i18n";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <SettingsProvider>
    <ThemeProvider>
      {/* <TellsProvider> */}
      <OverlayProvider>
        {/* <LoadingProvider> */}
        <ApiProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ApiProvider>
        {/* </LoadingProvider> */}
      </OverlayProvider>
      {/* </TellsProvider> */}
    </ThemeProvider>
  </SettingsProvider>
);
