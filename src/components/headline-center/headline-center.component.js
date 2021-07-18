import React from "react"

import { Main, Title } from "./headline-center.styles"

const HeadlineCenter = ({ title }) => {
  return (
    <Main>
      <Title>{title}</Title>
    </Main>
  )
}

export default HeadlineCenter
