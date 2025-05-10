import React, { Fragment } from "react";
import useDocument from "../libs/uses/document";
import useGraph from "../components/content/graph";
import useWindow from "../libs/uses/window";
import SEO from "../libs/plugins/seo";
import Navbar from "../components/navigation/navbar";
import Searchbar from "../components/navigation/searchbar";
import Slideshow from "../components/content/slideshow";
import * as El from "../components/layout/el";
import img1 from "../assets/img/slideshow/1.jpg";
import img2 from "../assets/img/slideshow/2.jpg";
import img3 from "../assets/img/slideshow/3.jpg";
import img4 from "../assets/img/slideshow/4.jpg";

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
        <El.Container cHeight="100vh" padding={width > 1200 ? "6.2rem 5.6rem 1.2rem 5.6rem" : width < 700 ? "1.2rem 1.8rem 1.2rem 1.8rem" : "6.2rem 3.7rem 1.2rem 3.7rem"}>
          <El.Section sWidth="100%" sHeight="100%" borderRadius="1.2rem">
            <El.Section sWidth="100%" sHeight="100%" position="absolute" top="0" left="0">
              <Slideshow delay={5000} isAutoPlay isDotEnabled>
                {slideshow.map((image, i) => (
                  <El.Img key={i} src={image} alt={`Slide ${i}`} style={{ width: "100%", height: "100%" }} />
                ))}
              </Slideshow>
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
        <El.Container alignItems="center" flexDirection="row">
          <El.Section flex="1">
            <El.Img src="/src/assets/img/1935.jpg" style={{ width: "100%", height: "31.2rem", borderRadius: "1.2rem" }} />
          </El.Section>
          <El.Section flex="1" style={{ color: "var(--color-secondary)", whiteSpace: "pre-wrap" }} gap="1.8rem">
            <H2>
              {`Crafting `}
              <Span color="var(--color-primary)">Communities</Span>,{`\nCreating `}
              <Span color="var(--color-primary)">Legacies</Span>.
            </H2>
            <P fontWeight="medium">{`Selaras Kontraktor isn't just a developer, we are dream weavers. Established in Bandung, our journey began with a vision to transform the skyline and redefine the concept of living spaces.\n\nFrom luxurious residences to modern commercial spaces, every project reflects our unwavering commitment to quality and community. Join us as we continue to build a legacy of trust, innovation, and excellence.`}</P>
          </El.Section>
        </El.Container>
      </El.Page>
    </Fragment>
  );
};

export default HomePage;
