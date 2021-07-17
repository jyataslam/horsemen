import styled from "styled-components"

export const Button = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 34.5px;
  background: transparent;
  border: 1px solid #ffffff88;
  z-index: 1;
  transition: all 0.4s ease-out;

  &:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    right: 0;
    top: 0;
    background: #b10000;
    transition: all 0.4s ease-out;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid #b10000;

    &:after {
      width: 100%;
    }
  }

  span {
    z-index: 1;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    color: white;
  }
`
