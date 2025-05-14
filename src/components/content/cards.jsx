import React from "react";
import useWindow from "../../libs/uses/window";
import useGraph from "./graph";
import * as El from "../layout/el";
import * as Button from "../input/buttons";
import watermark from "../../assets/svg/watermark.svg";

export const Feature = ({ id = "", icon, title = "", content = "" }) => {
  const { H3, P } = useGraph();

  const compid = `${id}-feature-card`;

  return (
    <El.Section id={compid} padding="1.2rem" gap="0.9rem" borderRadius="1.2rem" border="0.0625rem solid var(--color-primary-20)">
      <El.Section alignItems="center" justifyContent="center" sWidth="3.1rem" sHeight="3.1rem" style={{ color: "var(--color-background)" }} backgroundColor="var(--color-primary)" borderRadius="50%">
        {icon}
      </El.Section>
      <H3 variant="small" fontWeight="bold">
        {title}
      </H3>
      <P variant="tiny">{content}</P>
    </El.Section>
  );
};

export const Project = ({ id = "", image, title, content }) => {
  const { width } = useWindow();
  const { H3, P } = useGraph();

  const compid = `${id}-project-card`;

  const arrow = () => {
    return (
      <div style={{ width: "0.6875rem", height: "0.625rem", overflow: "hidden", flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", color: "inherit" }}>
        <svg width="100%" height="100%" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.714132 6.21383H9.18374L6.59144 9.32744C6.53142 9.39965 6.48621 9.48298 6.45839 9.57266C6.43058 9.66234 6.42069 9.75663 6.42932 9.85013C6.44673 10.039 6.53844 10.2132 6.68428 10.3344C6.83011 10.4556 7.01813 10.5139 7.20697 10.4965C7.3958 10.4791 7.56999 10.3874 7.6912 10.2415L11.2619 5.95674C11.2861 5.92246 11.3076 5.88675 11.3261 5.84962C11.3261 5.81391 11.3618 5.79249 11.3761 5.75678C11.4085 5.6749 11.4254 5.58774 11.4261 5.49969C11.4254 5.41165 11.4085 5.32449 11.3761 5.24261C11.3761 5.2069 11.3404 5.18547 11.3261 5.14977C11.3073 5.11254 11.2859 5.07674 11.2619 5.04265L7.6912 0.757857C7.63125 0.685545 7.55762 0.62577 7.47454 0.581957C7.39145 0.538143 7.30053 0.511152 7.207 0.502528C7.11347 0.493904 7.01915 0.503818 6.92945 0.531701C6.83975 0.559583 6.75644 0.604888 6.68428 0.665019C6.61188 0.724914 6.55203 0.79852 6.50817 0.881608C6.4643 0.964697 6.43728 1.05563 6.42865 1.14919C6.42002 1.24276 6.42997 1.3371 6.4579 1.42681C6.48584 1.51652 6.53122 1.59982 6.59144 1.67195L9.18374 4.78556H0.714132C0.524732 4.78556 0.34309 4.8608 0.209165 4.99473C0.0752388 5.12865 0 5.31029 0 5.49969C0 5.68909 0.0752388 5.87073 0.209165 6.00466C0.34309 6.13859 0.524732 6.21383 0.714132 6.21383Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  };

  return (
    <El.Section id={compid} sWidth="100%" alignItems="center" flexDirection="row" borderRadius="1.2rem" padding="0.6rem" backgroundColor="var(--color-secondary-5)" flexWrap>
      <El.Section flex="1" padding="0" gap="0" minWidth="21.9rem">
        <El.Img src={watermark} alt={`${title}-watermark`} style={{ opacity: "0.5", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "9.4rem", height: "auto" }} />
        <El.Img src={image} alt={title} style={{ width: "100%", height: width < 742 ? (width > 700 ? "15.6rem" : width < 566 ? "15.6rem" : "21.8rem") : "21.8rem", borderRadius: "0.6rem" }} />
      </El.Section>
      <El.Section flex="1" padding="1.2rem" gap="1.2rem" minWidth="21.9rem" maxWidth="100%">
        <H3 fontWeight="bold">{title}</H3>
        <P ellipsed lineClamp={width < 742 ? (width > 700 ? "6" : width < 566 ? "6" : "8") : "8"} whiteSpace="pre-wrap" variant="tiny" fontWeight="medium">
          {content}
        </P>
        <Button.More>
          More Details
          {arrow()}
        </Button.More>
      </El.Section>
    </El.Section>
  );
};
