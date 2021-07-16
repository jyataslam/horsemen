import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import ButtonSquare from "../button-square/button-square.component"
import Video from "../video/video.component"

import { Main, HeroTitleText } from "./hero.styles"

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        bgImage: file(relativePath: { eq: "hero_chess.jpeg" }) {
          id
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        videoImg: file(relativePath: { eq: "video-screengrab.jpg" }) {
          id
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const heroImage = data.bgImage.childImageSharp.fluid
  const videoImage = data.videoImg.childImageSharp.fluid

  return (
    <Main className="d-flex flex-direction-col justify-content-center align-items-center">
      <Video />
      <Container>
        <Row>
          <Col
            xs={12}
            className="d-flex flex-direction-col justify-content-center align-items-center"
          >
            <StaticImage
              src="../../images/logo-large-min.png"
              alt="horsemen inc logo"
              className="logo"
            />
            <HeroTitleText>the sneaky horse never sleeps!</HeroTitleText>
            <ButtonSquare title="our services" />
          </Col>
        </Row>
      </Container>
    </Main>
  )
}

export default Hero
