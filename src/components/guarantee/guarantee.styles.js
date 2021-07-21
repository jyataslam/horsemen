import styled from "styled-components"

export const Main = styled.section`
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

    & .button {
      margin-top: 2rem;
      max-width: 200px;
    }

    span {
      font-weight: 700;
    }
  }
`

export const Header = styled.h2`
  font-size: 2rem;
  text-align: center;
  padding-top: 60px;
  font-weight: 300;
  text-transform: uppercase;
  color: white;

  &:last-child {
    padding-top: 100px;

    @media screen and (max-width: 550px) {
      padding-top: 40px;
    }
  }
`

export const Text = styled.p`
  color: #d5dde0;
  font-weight: 300;
  padding-bottom: 1.25rem;
`

export const TextAndImageContainer = styled.div`
  display: flex;

  & .aicpa {
    width: 50%;

    @media screen and (max-width: 550px) {
      width: 100%;
      order: 1;
      margin-top: 2rem;
      margin-bottom: 3rem;
    }

    img {
      object-fit: contain !important;
    }
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`

export const TextContainer = styled.p`
  width: 50%;
  color: #d5dde0;
  font-weight: 300;
  padding-bottom: 1.25rem;

  @media screen and (max-width: 550px) {
    width: 100%;
    order: 2;
  }
`
