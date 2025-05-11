const useDocument = () => {
  const company = "Selaras Breathwork Studio";
  const short = "selaras-breathwork-studio";
  const domain = import.meta.env.VITE_DOMAIN_URL;

  return { company, short, domain };
};

export default useDocument;
