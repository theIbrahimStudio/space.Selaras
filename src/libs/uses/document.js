const useDocument = () => {
  const company = "Selaras Breathwork Studio";
  const short = "selaras-breathwork-studio";
  const domain = import.meta.env.REACT_APP_DOMAIN_MAIN;

  return { company, short, domain };
};

export default useDocument;
