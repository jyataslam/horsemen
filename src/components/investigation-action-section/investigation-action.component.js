import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Main, Overlay } from "./investigation-action.styles"

const InvestigationAction = () => {
  return (
    <Main>
      <Overlay />
      <h1>start an investigation</h1>
      <StaticImage
        src="../../images/arrow-right.png"
        alt="right directional arrow"
        className="arrow"
      />
    </Main>
  )
}

export default InvestigationAction
