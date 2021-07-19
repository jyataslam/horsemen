import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  padding-bottom: 60px;
  background: #2c2c2c;
  padding-top: 60px;
  border-top: 5px solid #b10000;
`

export const Title = styled.h1`
  position: relative;
  color: white;
  font-weight: 200;
  font-size: 3.5rem;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  &:before {
    content: "";
    position: absolute;
    border-bottom: 3px solid #b10000;
    width: 150px;
    right: 100%;
    margin-right: 25px;
    top: 50%;
  }

  &:after {
    content: "";
    position: absolute;
    border-bottom: 3px solid #b10000;
    width: 150px;
    left: 100%;
    margin-left: 25px;
    top: 50%;
  }
`
