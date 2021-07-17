import React from "react"

import { Main, Title, Description } from "./section-title.styles"

const SectionTitle = ({ title, desc, ...props }) => {
  return (
    <Main>
      <Description {...props}>{desc}</Description>
      <Title {...props}>{title}</Title>
    </Main>
  )
}

export default SectionTitle
