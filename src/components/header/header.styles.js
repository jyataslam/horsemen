import styled from "styled-components"

export const Main = styled.div`
  height: auto;
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  color: white;
  border-bottom: 2px solid #b10000;
  z-index: 10;
  transition: all 0.3s ease-in-out;

  &.scrolled {
    background: #2c2c2ccc;
  }
`

export const LogoContainer = styled.div`
  height: 55px;
  width: 16%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  height: auto;
  width: 150px;
  margin: 0 auto;
`

export const LinksContainer = styled.div`
  width: 42%;
`

export const Link = styled.p`
  text-transform: uppercase;
  padding: 0 2rem;
  font-weight: 300;
`

export const InvestigationButtonContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const InvestigationButton = styled.p`
  height: 100%;
  padding: 25px 4rem;
  background: #b10000;
  text-transform: uppercase;
  font-weight: 700;
  transition: background 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: #990000;
  }
`
