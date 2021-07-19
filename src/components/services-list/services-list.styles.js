import styled from "styled-components"

export const Main = styled.section`
  & .services-bg-image {
    padding: 100px 0;
    position: relative;
    background-color: #111315;
    color: white;
  }

  & .individual-service-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    margin-top: 5rem;
    padding: 0 3rem;
  }

  & .button {
    max-width: 250px;
    margin-top: 5rem;
  }
`

export const Header = styled.h2`
  text-transform: uppercase;
  font-weight: 200;
  font-size: 2.25rem;
  text-align: center;
`

export const Subheader = styled.p`
  font-weight: 300;
  color: #9eaeb4;
  text-align: center;
`

export const ServiceImage = styled.img`
  height: 100px;
  width: auto;
  filter: invert(0.7);
`

export const IndividualHeader = styled.h4`
  color: #b10000;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 12px;
  text-align: center;
`

export const IndividualDesc = styled.p`
  color: #cfe2e9;
  font-weight: 300;
  text-align: center;
`
