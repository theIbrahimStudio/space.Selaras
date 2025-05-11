const useDocument = () => {
  const company = "Selaras Breathwork Studio";
  const short = "selaras-breathwork-studio";
  const domain = import.meta.env.REACT_APP_DOMAIN;

  return { company, short, domain };
};

export default useDocument;
