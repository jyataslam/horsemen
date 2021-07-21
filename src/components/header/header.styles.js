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
    background: #2c2c2cf6;
  }
`

export const LogoContainer = styled.div`
  height: 55px;
  width: 16%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`

export const Logo = styled.img`
  height: auto;
  width: 150px;
  margin: 0 auto;

  @media screen and (max-width: 550px) {
    width: 115px;
    position: relative;
    right: 2rem;
  }
`

export const LinksContainer = styled.div`
  width: 42%;

  @media screen and (max-width: 800px) {
    display: none !important;
  }
`

export const Link = styled.p`
  position: relative;
  text-transform: uppercase;
  padding: 0 0 2px;
  font-weight: 300;
  margin: 0 2rem;

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0;
    background: white;
    transition: all 0.3s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    margin: 0 1rem;
  }
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

  @media screen and (max-width: 1024px) {
    padding: 25px 2rem;
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`

export const NavBtnContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  @media screen and (max-width: 800px) {
    display: initial;
  }
`

export const Hamburger = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 0;
  -webkit-filter: invert(1);
  filter: invert(1);
  }
`
