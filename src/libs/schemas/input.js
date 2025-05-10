const useInputSchema = () => {
  const inputSchema = {
    name: "",
    gender: "",
    email: "",
    password: "",
    password_confirm: "",
    phone: "",
  };

  const errorSchema = {
    name: null,
    gender: null,
    email: null,
    password: null,
    password_confirm: null,
    phone: null,
  };

  return {
    inputSchema,
    errorSchema,
  };
};

export default useInputSchema;
