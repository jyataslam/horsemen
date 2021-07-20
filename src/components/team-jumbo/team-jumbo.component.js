import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import HeadlineCenter from "../headline-center/headline-center.component"

import { Main } from "./team-jumbo.styles"

const TeamJumbo = () => {
  return (
    <Main>
      <HeadlineCenter title="our team" />
      <StaticImage
        src="../../images/staff.jpg"
        alt="horsemen staff photo"
        className="image"
      />
    </Main>
  )
}

export default TeamJumbo
