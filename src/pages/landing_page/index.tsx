import React from "react";

// Styled-Components
import styled from "styled-components";
import { MainBGContainerStyled } from "../../style/style";

// Logo
import Logo from "../../components/landing_page/Logo";

// En Construccion
import EnConstruccion from "../../components/landing_page/EnConstruccion";

/**
 * Landing Page.
 *
 * @returns Main page.
 */
const LandingPage = () => {
  return (
    <LandingPageContainerStyled>
      <Logo width={"70%"} />
      <EnConstruccion />
    </LandingPageContainerStyled>
  );
};

export default LandingPage;

/* Styled-Components */
// Landing Page Container, inherits from main container with background.
const LandingPageContainerStyled = styled(MainBGContainerStyled)`
  min-width: 100vw;
  width: auto;
  min-height: 100vh;
  height: auto;
`;