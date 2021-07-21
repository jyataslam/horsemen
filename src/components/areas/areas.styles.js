import styled from "styled-components"

export const Main = styled.section`
  background-color: #0f1214;

  & .bg-image {
    padding-bottom: 100px;
    color: white;

    &:before,
    &:after {
      background-attachment: fixed;

      @media screen and (max-width: 800px) {
        background-attachment: scroll;
      }
    }
  }
`

export const MainContainer = styled.div`
  padding-top: 100px;
`

export const Header = styled.h2`
  text-transform: uppercase;
  font-weight: 200;
  font-size: 2.25rem;
  text-align: center;
`

export const Subheader = styled.p`
  font-weight: 300;
  color: #999fa1;
  text-align: center;
`
export const Text = styled.p`
  font-weight: 300;
  padding-top: 0;
  color: #999fa1;
`
export const FlexContainer = styled.div`
  display: flex;
  margin-top: 5rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  & .map-img {
    width: 40%;

    @media screen and (max-width: 1024px) {
      width: 100%;
      order: 1;
      margin-bottom: 5rem;
    }
  }
`

export const TextContainer = styled.div`
  width: 60%;
  padding-right: 3rem;

  & .button {
    max-width: 200px;
    margin: 3rem auto 0 0;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    order: 2;
  }
`

export const Headline = styled.h2`
  position: relative;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 1.6rem;
  text-align: left;
  margin-top: 3rem;
  display: inline-block;
  padding-bottom: 4px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #b10000;
  }

  &:first-child {
    margin-top: 0;
  }
`
