import styled from "styled-components"

export const Main = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  height: 90vh;
  width: 100%;

  @media screen and (max-width: 1024px) {
    height: 42vh;
  }

  @media screen and (max-width: 550px) {
    height: 26vh;
  }
`
