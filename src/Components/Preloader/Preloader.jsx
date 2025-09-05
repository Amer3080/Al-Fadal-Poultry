// Preloader.jsx
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import styled, { keyframes, css } from "styled-components";
import image from "../../assets/images/Logo.png";

// keyframes
const drawLogo = keyframes`
  to { stroke-dashoffset: 0; }
`;
const expandBar = keyframes`
  to { width: 80px; }
`;
const fadeOut = keyframes`
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

// styled-components wrappers
const Overlay = styled(Box)`
  position: fixed;
  inset: 0;
  background-color: #2b5a34;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  /* use a transient prop ($hide) to avoid React warnings */
  ${({ $hide }) =>
    $hide &&
    css`
      animation: ${fadeOut} 0.6s ease-in forwards;
    `}
`;

const Logo = styled.svg`
  width: 100px;
  height: 100px;

  path {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: ${drawLogo} 1.8s ease-out forwards;
  }
`;

const LoaderBar = styled.div`
  width: 0;
  height: 4px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 2px;
  animation: ${expandBar} 1.5s 0.5s ease-out forwards;
`;

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const onLoad = () => setTimeout(() => setHide(true), 2300);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <Overlay component="div" role="alert" aria-busy={!hide} $hide={hide}>
      <Box textAlign="center">
        <Logo viewBox="0 0 100 100">{image}</Logo>
        <LoaderBar />
      </Box>
    </Overlay>
  );
}
