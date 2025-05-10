import { createContext, useContext, useState } from "react";

const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  const [activeOverlay, setActiveOverlay] = useState(null);

  return <OverlayContext value={{ activeOverlay, setActiveOverlay }}>{children}</OverlayContext>;
};

const useOverlay = () => useContext(OverlayContext);

export default useOverlay;
