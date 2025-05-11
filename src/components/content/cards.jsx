import React from "react";
import useGraph from "./graph";
import * as El from "../layout/el";

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
