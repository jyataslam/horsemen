import styled, { css } from "styled-components"

const fixedPositionStyles = css`
  position: fixed;
  opacity: 1;
`

const opacityOneStyles = css`
  opacity: 1;
`

const getPositionStyles = props => {
  if (props.fixed) {
    return fixedPositionStyles
  } else if (props.opacity) {
    return opacityOneStyles
  }
  return
}

export const VideoMain = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  opacity: 0.5;

  ${getPositionStyles}
`
