import { createContext, useContext } from "react";

const ApiContext = createContext();
const apiURL = import.meta.env.VITE_API_URL;

export const ApiProvider = ({ children }) => {
  const iGETit = async (token, route) => {
    const url = `${apiURL}${route}`;
    try {
      const req = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await fetch(url, req);
      if (res.ok) return res;
      else return null;
    } catch (error) {
      console.error(`GET it for ${url} error:`, error);
    }
  };

  const iPOSTit = async (token, route, payload) => {
    const url = `${apiURL}${route}`;
    try {
      const req = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await fetch(url, req);
      if (res.ok) return res;
      else return null;
    } catch (error) {
      console.error(`POST it for ${url} error:`, error);
    }
  };

  const iPUTit = async (token, route, payload) => {
    const url = `${apiURL}${route}`;
    try {
      const req = {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await fetch(url, req);
      if (res.ok) return res;
      else return null;
    } catch (error) {
      console.error(`PUT it for ${url} error:`, error);
    }
  };

  const iDELETEit = async (token, route) => {
    const url = `${apiURL}${route}`;
    try {
      const req = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await fetch(url, req);
      if (res.ok) return res;
      else return null;
    } catch (error) {
      console.error(`DELETE it for ${url} error:`, error);
    }
  };

  return <ApiContext value={{ iGETit, iPOSTit, iPUTit, iDELETEit }}>{children}</ApiContext>;
};

const useApi = () => useContext(ApiContext);

export default useApi;
