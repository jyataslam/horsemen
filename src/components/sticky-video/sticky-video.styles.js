import styled from "styled-components"

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
    /* background: linear-gradient(
      0deg,
      rgba(51, 61, 66, 1) 77%,
      rgba(51, 61, 66, 0.5) 94%,
      rgba(51, 61, 66, 0) 100%
    );
    background: linear-gradient(
      180deg,
      rgba(455, 455, 455, 0) 0%,
      #bfe8f9 26%,
      #9fd8ef 59%,
      #0068f2 100%
    );
    background: #ffa17f; */
    background: -webkit-linear-gradient(
      to bottom,
      #00223e 0%,
      #00223e 25%,
      #00223e 50%,
      #00223e 75%,
      #00223e 100%
    );
    background: linear-gradient(
      to bottom,
      #00223e 0%, #00223e 25%, #221332 50%, #520000 75%,  #333d42 100% );
    );

    z-index: 0;
  }

  .sticky,
  .sticky2 {
    height: 100vh;
    /* background: linear-gradient(
      160deg,
      #e4f5fc 0%,
      #bfe8f9 26%,
      #9fd8ef 59%,
      #0068f2 100%
    ); */
    width: 100%;
    z-index: 1;

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

      h2 {
        font-size: 40px;
        position: absolute;
        color: white;
        bottom: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
      }
    }
  }
`
