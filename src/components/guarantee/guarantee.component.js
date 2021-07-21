import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import HeadlineCenter from "../headline-center/headline-center.component"
import ButtonSquare from "../button-square/button-square.component"

import {
  Main,
  Header,
  Text,
  TextAndImageContainer,
  TextContainer,
} from "./guarantee.styles"

const Guarantee = () => {
  const data = useStaticQuery(
    graphql`
      query {
        chess: file(relativePath: { eq: "chess-dark-min.jpg" }) {
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

  const chessImage = data.chess.childImageSharp.fluid

  return (
    <Main>
      <BackgroundImage fluid={chessImage} className="bg-image">
        <HeadlineCenter title="our guarantee" />
        <Container>
          <Row>
            <Col sm={12}>
              <Header>Guarding Your Investment</Header>
            </Col>
            <Col lg={{ span: 8, offset: 2 }} md={12}>
              <Text data-aos="fade-up">
                Horsemen’s investigative approach is highly client centric; we
                are self-driven by our own commitment to excellence and deep
                passion to succeed at meeting your case specific needs! No other
                firm approaches fraud investigations quite like Horsemen and nor
                do their results compare!
              </Text>
              <TextAndImageContainer>
                <TextContainer data-aos="fade-up">
                  We are a lead provider of investigative services to the
                  insurance fraud industry in both California and Hawaii because
                  of our unique and distinct attributes – we possess the most
                  comprehensive statewide network of “Company Employed”
                  Investigators with proven superior capabilities and we manage
                  the entire process from start to finish, personalizing your
                  service (no subcontracting). Horsemen’s approach is
                  integrated, which means you will experience faster turnaround
                  times and you can expect higher levels of consistent and
                  unrivaled performance!
                </TextContainer>
                <StaticImage
                  src="../../images/aicpa.png"
                  className="aicpa"
                  data-aos="fade-up"
                />
              </TextAndImageContainer>
            </Col>
            <Col sm={12}>
              <Header>How Do We Guard Your Investment?</Header>
            </Col>
            <Col lg={{ span: 8, offset: 2 }} md={12}>
              <Text data-aos="fade-up">
                At Horsemen, you have our service assurance – we’ll achieve all
                your case specific objectives at <span>Zero Risk</span> and with{" "}
                <span>No Service Compromise!</span>
              </Text>
              <ButtonSquare title="learn more" />
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
    </Main>
  )
}

export default Guarantee
