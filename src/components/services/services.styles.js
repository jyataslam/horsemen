import styled from "styled-components"

export const Main = styled.section`
  background: #2c2c2c;
  color: white;
  color: initial;
`

export const ServicesMain = styled.section`
  position: relative;
  padding: 100px 0;
  z-index: 2;
  background: #0f1214;
  color: white;

  @media screen and (max-width: 800px) {
    padding-bottom: 2rem;
  }

  & .button {
    max-width: 200px;
    margin-top: 2rem;
    margin-left: unset;
  }
`

export const AboutParagraph = styled.p`
  font-weight: 300;
  padding-top: 1rem;
  padding-right: 5rem;
  color: #999fa1;

  &:first-child {
    padding-top: 2rem;
  }

  @media screen and (max-width: 800px) {
    padding-right: 0;
  }
`

export const AboutParagraphTwo = styled.p`
  font-weight: 300;
  padding-top: 1rem;
  color: #999fa1;

  &:first-child {
    padding-top: 2rem;
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
export const ImageContainerTwo = styled.div`
  position: absolute;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;

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
    order: 2;
  }
`
