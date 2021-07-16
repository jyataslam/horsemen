import React from "react"

import { Main, Title, Description } from "./section-title.styles"

const SectionTitle = ({ title, desc, ...props }) => {
  return (
    <Main>
      <Title {...props}>{title}</Title>
      <Description {...props}>{desc}</Description>
    </Main>
  )
}

export default SectionTitle
