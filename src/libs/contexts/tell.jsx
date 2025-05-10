import React, { createContext, useContext, useState, useEffect } from "react";
import useStorage from "../uses/storage";
import Tells from "../../components/feedback/tell";

const TellsContext = createContext();

export const TellsProvider = ({ children }) => {
  const { setItem, getItem, rmvItem } = useStorage();

  const [tells, setTells] = useState(null);

  const showTells = (type, message, onClose) => {
    const newTells = { type, message, onClose };
    setTells(newTells);
    setItem("selaras_app_tells", newTells);
  };

  const hideTells = () => {
    setTells(null);
    rmvItem("selaras_app_tells");
  };

  useEffect(() => {
    const savedTells = getItem("selaras_app_tells");
    if (savedTells) setTells(savedTells);
  }, []);

  return (
    <TellsContext value={{ showTells, hideTells }}>
      {children}
      {tells && (
        <Tells
          type={tells.type}
          message={tells.message}
          onClose={() => {
            hideTells();
            if (tells.onClose) tells.onClose();
          }}
        />
      )}
    </TellsContext>
  );
};

const useTells = () => useContext(TellsContext);

export default useTells;
