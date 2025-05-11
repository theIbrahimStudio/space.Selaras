import React, { Fragment } from "react";
import useDocument from "../libs/uses/document";
import useGraph from "../components/content/graph";
import useWindow from "../libs/uses/window";
import SEO from "../libs/plugins/seo";
import Navbar from "../components/navigation/navbar";
import Searchbar from "../components/navigation/searchbar";
import Carousel from "../components/content/carousel";
import * as El from "../components/layout/el";
import * as Card from "../components/content/cards";
import * as Icon from "../components/content/icons";
import * as Button from "../components/input/buttons";
import img1 from "../assets/img/slideshow/1.jpg";
import img2 from "../assets/img/slideshow/2.jpg";
import img3 from "../assets/img/slideshow/3.jpg";
import img4 from "../assets/img/slideshow/4.jpg";
import asideImg from "../assets/img/2148972401.jpg";

const HomePage = () => {
  const { short } = useDocument();
  const { H1, H2, P, Span } = useGraph();
  const { width } = useWindow();

  const pageid = `${short}-home`;
  const slideshow = [img1, img2, img3, img4];

  return (
    <Fragment>
      <SEO title="Home" route="/" />
      <El.Page pageid={pageid}>
        <Navbar />
        <El.Container cHeight="100vh" padding={width > 1200 ? "6.2rem 5.6rem 1.2rem 5.6rem" : width < 700 ? "6.2rem 1.8rem 1.2rem 1.8rem" : "6.2rem 3.7rem 1.2rem 3.7rem"}>
          <El.Section sWidth="100%" sHeight="100%" borderRadius="1.2rem">
            <El.Section sWidth="100%" sHeight="100%" position="absolute" top="0" left="0">
              <Carousel delay={5000} isAutoPlay isDotEnabled>
                {slideshow.map((image, i) => (
                  <El.Img key={i} src={image} alt={`Slide ${i}`} style={{ width: "100%", height: "100%" }} />
                ))}
              </Carousel>
            </El.Section>
            <El.Section sWidth="100%" sHeight="100%" alignItems="center" justifyContent="center" gap="1.2rem" backgroundColor="var(--color-secondary-20)" padding="1.2rem 3.7rem 1.2rem 3.7rem">
              <El.Section gap="1.2rem" sWidth="100%" maxWidth="43.7rem" alignItems="center" justifyContent="center" style={{ color: "var(--color-background)", whiteSpace: "pre-wrap" }}>
                <H1 textAlign="center">{`Building Dreams,\nOne Home at a Time.`}</H1>
                <P textAlign="center" fontWeight="medium">
                  Discover why Selaras Kontraktor is celebrated as the Best Developer by Property & Bank Award. Our passion for excellence and innovation in real estate makes us the top choice for your next home or investment.
                </P>
              </El.Section>
              <Searchbar />
            </El.Section>
          </El.Section>
        </El.Container>
        <El.Container alignItems="center" flexDirection="row" flexWrap>
          <El.Section flex="1" minWidth="21.9rem">
            <El.Img src={asideImg} style={{ width: "100%", height: "31.2rem", borderRadius: "1.2rem" }} />
          </El.Section>
          <El.Section flex="1" minWidth="21.9rem" style={{ color: "var(--color-secondary)", whiteSpace: "pre-wrap" }} gap="1.8rem">
            <H2>
              {`Crafting `}
              <Span color="var(--color-primary)">Communities</Span>,{`\nCreating `}
              <Span color="var(--color-primary)">Legacies</Span>.
            </H2>
            <P fontWeight="medium">{`Selaras Kontraktor isn't just a developer, we are dream weavers. Established in Bandung, our journey began with a vision to transform the skyline and redefine the concept of living spaces.\n\nFrom luxurious residences to modern commercial spaces, every project reflects our unwavering commitment to quality and community. Join us as we continue to build a legacy of trust, innovation, and excellence.`}</P>
            <Button.CTA>Learn More</Button.CTA>
          </El.Section>
        </El.Container>
        <El.Container alignItems="flex-end" flexDirection="row" flexWrap wrapReverse>
          <El.Section flex="1" minWidth="21.9rem" position="sticky" top="0" left="0" style={{ color: "var(--color-secondary)", whiteSpace: "pre-wrap" }} gap="1.8rem">
            <H2>
              {`Why Choose `}
              <Span color="var(--color-primary)">Selaras Kontraktor</Span>?
            </H2>
            <P fontWeight="medium">Discover the unparalleled advantages that set Selaras Kontraktor apart from the competition. Our commitment to excellence and innovation ensures that you receive only the best in real estate development.</P>
            <El.Section flexDirection="row" gap="1.8rem">
              <El.Section gap="0" style={{ color: "var(--color-secondary)" }}>
                <P variant="medium" fontWeight="bold">
                  140K+
                </P>
                <P variant="tiny" fontWeight="medium">
                  Best Properties
                </P>
              </El.Section>
              <El.Section gap="0" style={{ color: "var(--color-secondary)" }}>
                <P variant="medium" fontWeight="bold">
                  85K+
                </P>
                <P variant="tiny" fontWeight="medium">
                  Happy Customers
                </P>
              </El.Section>
              <El.Section gap="0" style={{ color: "var(--color-secondary)" }}>
                <P variant="medium" fontWeight="bold">
                  40K+
                </P>
                <P variant="tiny" fontWeight="medium">
                  Brand Partners
                </P>
              </El.Section>
            </El.Section>
          </El.Section>
          <El.Section flex="1" minWidth="21.9rem">
            <El.Grid style={{ gap: "1.2rem" }}>
              <Card.Feature icon={<Icon.Stack size="1.5rem" />} title="Every detail matters." content="At Selaras Kontraktor, we pride ourselves on our meticulous attention to detail. Our properties are built with the highest standards of quality, ensuring durability and timeless beauty." />
              <Card.Feature icon={<Icon.Glance size="1.5rem" />} title="Reimagining modern living." content="We embrace creativity and forward-thinking in our designs. Our innovative approach results in unique, functional, and aesthetically pleasing spaces that cater to contemporary lifestyles." />
              <Card.Feature icon={<Icon.Location size="1.5rem" />} title="Location is everything." content="Strategically situated in Bandung’s most sought-after areas, our developments offer convenient access to essential amenities, business districts, and leisure destinations, enhancing your living experience." />
              <Card.Feature icon={<Icon.Gift size="1.5rem" />} title="Your satisfaction is our priority." content="We believe in building lasting relationships with our clients. Our dedicated customer service team is always ready to assist you, ensuring a seamless and enjoyable experience from start to finish." />
            </El.Grid>
          </El.Section>
        </El.Container>
        <El.Container alignItems="center">
          <El.Section flex="1" minWidth="21.9rem" style={{ color: "var(--color-secondary)", whiteSpace: "pre-wrap" }} gap="1.8rem">
            <H2>
              {`Featured `}
              <Span color="var(--color-primary)">Projects</Span>
            </H2>
            <P fontWeight="medium">Dive into our portfolio of stunning properties that set the benchmark for luxury and comfort in Bandung. Each project by Selaras Kontraktor is a testament to our dedication to superior craftsmanship and visionary design. Whether you seek a serene sanctuary or a bustling commercial hub, our developments promise to elevate your lifestyle.</P>
          </El.Section>
          <Button.CTA>See All Projects</Button.CTA>
        </El.Container>
        <El.Container alignItems="center">
          <El.Section flex="1" minWidth="21.9rem" style={{ color: "var(--color-secondary)", whiteSpace: "pre-wrap" }} gap="1.8rem">
            <H2>
              <Span color="var(--color-primary)">Stay Updated</Span>
              {` with Latest News`}
            </H2>
            <P fontWeight="medium">Keep your finger on the pulse of the latest happenings in Bandung’s real estate scene. From groundbreaking ceremonies to project completions, our news section brings you all the exciting updates from Selaras Kontraktor.</P>
          </El.Section>
          <Button.CTA>See All News</Button.CTA>
        </El.Container>
      </El.Page>
    </Fragment>
  );
};

export default HomePage;
