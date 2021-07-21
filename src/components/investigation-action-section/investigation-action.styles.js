import styled from "styled-components"

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: #6441a5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2a0845,
    #6441a5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2a0845,
    #6441a5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  transition: all 0.6s ease-in-out;
`

export const Main = styled.section`
  position: relative;
  background: #8e0e00;
  background: -webkit-linear-gradient(to left, #1f1c18, #8e0e00);
  background: linear-gradient(to left, #1f1c18, #8e0e00);

  display: flex;
  justify-content: center;
  place-items: center;
  color: white;
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #d1d1d1;
  }

  &:hover ${Overlay} {
    width: 100%;
  }

  &:hover .arrow {
    filter: invert(0.7);
  }

  h1 {
    font-weight: 200;
    text-align: center;
    margin-top: 6rem;
    margin-bottom: 6rem;
    text-transform: uppercase;
    font-size: 3.5rem;
    padding-right: 1.5rem;
    z-index: 1;

    @media screen and (max-width: 800px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 550px) {
      font-size: 2rem;
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }

  & .arrow {
    height: 100px;
    width: 100px;
    filter: invert(1);
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 800px) {
      height: 65px;
      width: 65px;
    }

    @media screen and (max-width: 550px) {
      height: 100%;
      width: 55px;
      right: 2.6rem;
    }
  }
`
