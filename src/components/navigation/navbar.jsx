import React from "react";
import { useNavigate } from "react-router-dom";
import useWindow from "../../libs/uses/window";
import logo from "../../assets/png/selaras.png";
import * as El from "../layout/el";
import * as Button from "../input/buttons";

const Navbar = ({ id = "" }) => {
  const navigate = useNavigate();
  const { width } = useWindow();

  const compid = `${id}-navbar`;

  return (
    <El.Section id={compid} sWidth="100%" sHeight="5rem" hasGlassMorph flexDirection="row" alignItems="center" justifyContent="space-between" position="fixed" top="0" left="0" padding={width > 1200 ? "0 5.6rem" : width < 700 ? "0 1.8rem" : "0 3.7rem"} style={{ borderBottom: "0.0625rem solid var(--color-secondary-10)", zIndex: "900" }}>
      <El.Img src={logo} alt="Selaras Breathwork Studio" style={{ width: "9.4rem", height: "auto", cursor: "pointer" }} onClick={() => navigate("/")} />
      <El.Section flexDirection="row">
        <Button.Tab isActive>Home</Button.Tab>
        <Button.Tab>About</Button.Tab>
        <Button.Tab>Calculator</Button.Tab>
        <Button.Tab>Project</Button.Tab>
        <Button.Tab>Blog</Button.Tab>
      </El.Section>
      <El.Section sWidth="9.4rem" alignItems="flex-end">
        <Button.Primary variant="line" size="small">
          Contact Us
        </Button.Primary>
      </El.Section>
    </El.Section>
  );
};

export default Navbar;
