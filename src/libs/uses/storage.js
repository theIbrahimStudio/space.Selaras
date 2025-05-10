import useCrypto from "./crypto";

const useStorage = () => {
  const { encrypt, decrypt } = useCrypto();

  const setItem = (key, value, willExpire = false, ttl = 3600000) => {
    const now = new Date();
    const item = { value: value, expiry: willExpire ? now.getTime() + ttl : "never" };
    const cry = encrypt(key, item);
    localStorage.setItem(key, cry);
  };

  const getItem = (key) => {
    const now = new Date();
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
    const item = decrypt(key, itemStr);
    if (!item) return null;
    if (item.expiry === "never") return item.value;
    else {
      if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }
    }

    return item.value;
  };

  const rmvItem = (key) => {
    localStorage.removeItem(key);
  };

  return { setItem, getItem, rmvItem };
};

export default useStorage;
