import styled from "styled-components"

export const Main = styled.section`
  position: relative;
  padding: 100px 0;
  z-index: 2;
  background: #0f1214;
  color: white;

  @media screen and (max-width: 800px) {
    padding-bottom: 2rem;
  }
`

export const AboutParagraph = styled.p`
  font-weight: 300;
  padding-top: 1rem;
  padding-right: 5rem;
  color: #8b999e;

  &:first-child {
    padding-top: 2rem;
  }

  @media screen and (max-width: 800px) {
    padding-right: 0;
  }
`

export const ImageContainer = styled.div`
  position: absolute;
  padding: 0;
  margin: 0;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  border-left: 5px solid #b10000;

  div {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    position: static;
    width: 100%;
    height: 320px;
    border: none;
    margin-top: 2rem;
  }
`
