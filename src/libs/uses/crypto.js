import CryptoJS from "crypto-js";

const useCrypto = () => {
  const encrypt = (key, obj) => {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(obj), key).toString();
    return encrypted;
  };

  const decrypt = (key, encrypted) => {
    const bytes = CryptoJS.AES.decrypt(encrypted, key);
    const unencrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return unencrypted;
  };

  return { encrypt, decrypt };
};

export default useCrypto;
