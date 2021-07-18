import styled from "styled-components"

import redBg from "../../images/horsemen-hero-bg-min.jpg"

export const StickyMain = styled.div`
  position: relative;
  overflow: hidden;
  background: transparent;

  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #00223e;
    border-top: 5px solid #b10000;
    z-index: 0;
  }

  .sticky,
  .sticky2 {
    height: 100vh;
    border-top: 5px solid #b10000;
    position: relative;
    background: url(${redBg});

    width: 100%;
    z-index: 1;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background: #00000073;
      z-index: -1;
    }

    & .animation,
    .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;

      & .logo {
        opacity: 1;
        position: absolute;
        width: auto;
        height: 200px;
        bottom: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      & svg {
        opacity: 1;
        position: absolute;
        width: 300px;
        height: 300px;
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .heading {
      position: absolute;
      height: 100%;
      width: 100%;

      .heading-container {
        font-size: 40px;
        text-align: center;
        position: absolute;
        color: white;
        bottom: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
      }
    }
  }
`
