import * as El from "../layout/el";

const Searchbar = ({ id = "" }) => {
  const compid = `${id}-searchbar`;

  return <El.Section id={compid} maxWidth="43.7rem" sWidth="100%" sHeight="5rem" borderRadius="9999px" hasGlassMorph flexDirection="row" alignItems="center" justifyContent="center" padding="0.9rem 0.9rem 0.9rem 2.2rem"></El.Section>;
};

export default Searchbar;
