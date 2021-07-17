import styled, { css } from "styled-components"

const textAlignLeftStyles = css`
  text-align: left;
`

const getAlignmentStyles = props => {
  if (props.textAlignLeft) {
    return textAlignLeftStyles
  }
  return
}

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 1rem;

  ${getAlignmentStyles}
`

export const Description = styled.p`
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  color: #b10000;
  font-size: 20px;
  margin-bottom: 1rem;

  ${getAlignmentStyles}
`
