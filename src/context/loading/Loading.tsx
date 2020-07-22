import React, { useEffect, useState } from "react";

// Styled-Components
import styled, { css } from "styled-components";
import { ContainerStyled, media, animations } from "../../style/main_style";

// Loading component.
import { LoadingSpinner } from "../../context/loading/loading_elements";

// Loading consumer.
import { useLoading } from ".";

// Silk&Rock logo
import Logo from "../../components/logo";

/**
 * Loading component.
 *
 * @param {*} props
 * @returns
 */
const Loading: React.FC = () => {
  const { loading } = useLoading().state;

  const [render, setRender] = useState(false);

  const onAnimationEnd = (): void => {
    if (!loading) setRender(false);
  };

  useEffect(() => {
    // If show is setted to true
    if (loading) {
      setRender(true);
    }
  }, [loading]);

  return render ? (
    <OverlayContainerStyled onAnimationEnd={onAnimationEnd} show={loading}>
      <LoadingContainerStyled>
        <LoadinLogoStyled>
          <Logo />
        </LoadinLogoStyled>
        <LoadingSpinnerStyled />
      </LoadingContainerStyled>
    </OverlayContainerStyled>
  ) : null;
};

export default Loading;

// Styled-Components
// Full display container
const OverlayContainerStyled = styled(ContainerStyled)<{ show: boolean }>`
  width: 100vw;
  height: 100vh;
  /* z-index. Value of 999, to ensure is first layer */
  z-index: 999;
  /* Position */
  position: absolute;
  top: 0;
  left: 0;
  /* BG */
  background-color: rgba(255, 255, 255, 1);
  /* Opacity */
  opacity: ${(props) => (props.show ? 1 : 0)};
  /* Pointer-Events */
  pointer-events: ${(props) => (props.show ? "default" : "none")};
  /* Animation */
  animation: ${(props) =>
    !props.show &&
    css`
      ${animations.fadeOutAnimation} 0.5s
    `};
`;

// LoadingContainer
const LoadingContainerStyled = styled(ContainerStyled)`
  width: 80%;
  height: 10em;
  /* Flexbox */
  justify-content: space-around;
  /* Font */
  text-align: center;
`;

// Loading spinne rstyled
const LoadingSpinnerStyled = styled(LoadingSpinner)`
  /* Animation */
  animation: ${animations.fadeInAnimation} 1s linear;
`;

// Loading text styled
const LoadinLogoStyled = styled.div`
  height: 2em;
  /* Animation */
  animation: ${animations.moveBottomFromTopAndFadeInAnimation} 1s ease-out;
  /* Media */
  @media (max-width: ${media.mediumSize}) {
    height: 1.8em;
  }
`;
