import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import ButtonSquare from "../button-square/button-square.component"
import Video from "../video/video.component"

import posterImage from "../../images/particles-compressed.jpg"
import HeroVideo from "../../videos/particles-compressed.mp4"

import { Main, HeroTitleText } from "./hero.styles"

const Hero = () => {
  return (
    <Main className="d-flex flex-direction-col justify-content-center align-items-center">
      <Video posterImage={posterImage} videoSrc={HeroVideo} />
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
