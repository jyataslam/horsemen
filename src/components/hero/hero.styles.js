import styled from "styled-components"

export const Main = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background: black;

  & .hero {
    position: absolute !important;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.5 !important;
  }

  & .logo {
    width: 700px;
  }

  & .button {
    margin-bottom: 5rem;
  }
`

export const HeroTitleText = styled.h3`
  text-transform: uppercase;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  padding: 0;
  color: white;
  z-index: 1;
`
