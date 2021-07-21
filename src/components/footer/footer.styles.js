import styled from "styled-components"

export const Main = styled.section`
  background: #0f1214;
  color: white;
  padding: 100px 0;

  & .logo {
    height: 125px;
    width: 275px;
  }
`
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #bdc3c5;

  p,
  a {
    font-weight: 300;
    color: inherit;
    font-size: 16px;
    text-decoration: none;
  }

  p {
    padding-right: 5px;
  }

  a {
    font-weight: 700;

    &:hover {
      color: white;
    }
  }

  @media screen and (max-width: 800px) {
    margin-top: 0;
    margin-bottom: 3rem;
  }
`

export const LinkHeader = styled.span`
  color: white;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
  text-transform: uppercase;
`

export const Link = styled.div`
  display: flex;
  margin-top: 10px;

  &:first-child {
    margin-top: 0;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  place-items: center;
  margin-top: 12px;

  a {
    margin: 5px;
  }
`
