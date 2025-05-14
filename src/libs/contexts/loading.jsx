import { useState, createContext, useContext } from "react";
import * as Loading from "../../components/feedback/loading";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (status) => setIsLoading(status);

  return (
    <LoadingContext value={{ isLoading, setLoading }}>
      {children}
      {isLoading && <Loading.Screen />}
    </LoadingContext>
  );
};

const useLoading = () => useContext(LoadingContext);

export default useLoading;
