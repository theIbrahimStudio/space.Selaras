import { Fragment, useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useWindow from "../../libs/uses/window";
import logo from "../../assets/png/selaras.png";
import * as El from "../layout/el";
import * as Button from "../input/buttons";
import * as Icon from "../content/icons";

const Navbar = ({ id = "" }) => {
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { width } = useWindow();

  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const compid = `${id}-navbar`;

  const handleClose = () => setMenuOpen(false);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  useEffect(() => {
    if (isClosing) setTimeout(() => handleClose(), 500);
  }, [isClosing, handleClose]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsClosing(true);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, setIsClosing]);

  return (
    <Fragment>
      <El.Section id={compid} sWidth="100%" sHeight="5rem" hasGlassMorph flexDirection="row" alignItems="center" justifyContent="space-between" position="fixed" top="0" left="0" padding={width > 1200 ? "0 5.6rem" : width < 700 ? "0 1.8rem" : "0 3.7rem"} style={{ borderBottom: "0.0625rem solid var(--color-secondary-10)", zIndex: "900" }}>
        <El.Img src={logo} alt="Selaras Breathwork Studio" style={{ width: "9.4rem", height: "auto", cursor: "pointer" }} onClick={() => navigate("/")} />
        {width > 827 && (
          <El.Section flexDirection="row">
            <Button.Tab isActive>Home</Button.Tab>
            <Button.Tab>About</Button.Tab>
            <Button.Tab>Calculator</Button.Tab>
            <Button.Tab>Project</Button.Tab>
            <Button.Tab>Blog</Button.Tab>
          </El.Section>
        )}
        <El.Section sWidth={width >= 827 ? "9.4rem" : "12.5rem"} alignItems="center" justifyContent="flex-end" flexDirection="row">
          <Button.Primary variant="line" size="small">
            Contact Us
          </Button.Primary>
          {width < 827 && (
            <Button.Primary childtype="icon" variant="hollow" size="small" onClick={() => setMenuOpen(true)}>
              <Icon.Menu size="1.5rem" />
            </Button.Primary>
          )}
        </El.Section>
      </El.Section>
      {menuOpen && (
        <El.Section position="fixed" top="0" left="0" sWidth="100%" sHeight="100vh" backgroundColor="var(--color-secondary-20)" padding="0" gap="0" alignItems="flex-end" style={{ zIndex: "999" }}>
          <El.Section ref={ref} sWidth="80%" sHeight="100%" hasGlassMorph></El.Section>
        </El.Section>
      )}
    </Fragment>
  );
};

export default Navbar;
