import { useState } from "react";
import useGraph from "../content/graph";
import * as El from "../layout/el";
import logo from "../../assets/svg/selaras.svg";

const Contact = ({ id = "", alt, icon, content, onClick = () => {} }) => {
  const { P } = useGraph();
  const [hovered, setHovered] = useState(false);
  const compid = `${id}-contact-${alt}`;

  return (
    <El.Section id={compid} sWidth="100%" flexDirection="row" alignItems="center">
      {icon}
      <P variant="xsmall" fontWeight="medium" textDecoration={hovered ? "underline" : "normal"} cursor="pointer" onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {content}
      </P>
    </El.Section>
  );
};

const Social = ({ id = "", alt, icon, content, onClick = () => {} }) => {
  const { P } = useGraph();
  const [hovered, setHovered] = useState(false);
  const compid = `${id}-social-${alt}`;

  return (
    <El.Section id={compid} flexDirection="row" alignItems="center" style={{ cursor: "pointer" }}>
      {icon}
      <P variant="xsmall" fontWeight="medium" textDecoration={hovered ? "underline" : "normal"} cursor="pointer" onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {content}
      </P>
    </El.Section>
  );
};

const Menu = ({ id = "", title, children }) => {
  const { P } = useGraph();
  const compid = `${id}-menu-${title}`;

  return (
    <El.Section id={compid} style={{ color: "var(--color-secondary)" }} gap="0.3rem">
      <P fontFamily="display" fontWeight="bold" color="var(--color-secondary)">
        {title}
      </P>
      {children}
    </El.Section>
  );
};

const Item = ({ id = "", content = "", onClick = () => {} }) => {
  const { P } = useGraph();
  const [hovered, setHovered] = useState(false);
  const compid = `${id}-item-${content?.toLowerCase()}`;

  return (
    <P id={compid} variant="xsmall" fontWeight="medium" opacity={hovered ? "1" : "0.5"} cursor="pointer" onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {content}
    </P>
  );
};

const Footer = () => {
  const { P } = useGraph();

  return (
    <El.Container alignItems="center" style={{ borderTop: "0.0625rem solid var(--color-secondary-10)" }}>
      <El.Section sWidth="100%" flexDirection="row" flexWrap gap="3.1rem 1.8rem">
        <El.Section sWidth="100%" minWidth="21.8rem" maxWidth="31.2rem" gap="1.8rem">
          <El.Img src={logo} alt="Selaras Breathwork Studio" style={{ width: "9.4rem", height: "auto", cursor: "pointer" }} onClick={() => {}} />
          <El.Section sWidth="100%" style={{ color: "var(--color-secondary)" }}>
            <Contact alt="call" content="+62 811 7038 868" />
            <Contact alt="address" content="123 Main Street, Bandung, West Java, Indonesia" />
            <Contact alt="email" content="customer@selaraskontraktor.id" />
          </El.Section>
        </El.Section>
        <Menu title="About Us">
          <Item content="Overview" />
          <Item content="Our Vision" />
          <Item content="Our Missions" />
          <Item content="Awards" />
          <Item content="History" />
          <Item content="Milestone" />
          <Item content="Management Profile" />
        </Menu>
        <Menu title="Explore">
          <Item content="Our Projects" />
          <Item content="Annual Report" />
          <Item content="Financial Statement" />
          <Item content="Code of Conduct" />
          <Item content="Corporate Secretary" />
          <Item content="News" />
          <Item content="Magazine" />
        </Menu>
        <Menu title="Information">
          <Item content="Career" />
          <Item content="Partnership" />
          <Item content="Offering" />
        </Menu>
        <Menu title="Socials">
          <Social alt="instagram" content="@selaraskontraktor.id" />
          <Social alt="whatsapp" content="+62 811 7038 868" />
          <Social alt="facebook" content="MajatamaGroup.id" />
          <Social alt="tiktok" content="@selaraskontraktor.id" />
        </Menu>
      </El.Section>
      <P variant="xsmall" color="var(--color-secondary-50)" fontWeight="medium">
        © 2025 Selaras Breathwork Studio. All rights reserved.
      </P>
    </El.Container>
  );
};

export default Footer;
