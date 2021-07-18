import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Container, Row, Col } from "react-bootstrap"

import SectionTitle from "../section-title/section-title.component"
import HeadlineCenter from "../headline-center/headline-center.component"
import ButtonSquare from "../button-square/button-square.component"

import {
  Main,
  ServicesMain,
  ImageContainer,
  ImageContainerTwo,
  AboutParagraph,
  AboutParagraphTwo,
} from "./services.styles"

const Services = () => {
  const data = useStaticQuery(
    graphql`
      query {
        camo: file(relativePath: { eq: "camoandcamera.jpg" }) {
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

  const camoImage = data.camo.childImageSharp.fluid

  return (
    <Main>
      <HeadlineCenter title="services" />
      <ServicesMain>
        <Container>
          <Row>
            <Col lg={6} md={12} className="padding-right">
              <SectionTitle
                title="horsemen's service assurance"
                desc="We've got you covered"
                textAlignLeft
              />
              <AboutParagraph>
                Horsemen Investigations is a full service investigation company,
                specializing in investigating insurance fraud and in minimizing
                risk exposure.
              </AboutParagraph>
              <AboutParagraph>
                We are a leader in providing investigative services for
                insurance fraud in the Western Region because of our unique and
                distinct attributes. We possess the most comprehensive regional
                network of “Company Employed”​ investigators — No
                Subcontractors! Our Horses have proven, superior capabilities
                and we manage the entire process from start to finish,
                personalizing your service. Our approach is integrated; you will
                experience faster turnaround times and you can expect higher
                levels of consistent, unrivaled performance.
              </AboutParagraph>
              <ButtonSquare title="learn more" />
            </Col>
            <ImageContainer>
              <BackgroundImage fluid={camoImage} />
            </ImageContainer>
          </Row>
        </Container>
      </ServicesMain>
      <ServicesMain>
        <Container>
          <Row>
            <ImageContainerTwo>
              <BackgroundImage fluid={camoImage} />
            </ImageContainerTwo>
            <Col lg={{ span: 5, offset: 7 }} md={12} className="padding-right">
              <SectionTitle
                title="horsemen's service assurance"
                desc="We've got you covered"
                textAlignLeft
              />
              <AboutParagraphTwo>
                Horsemen Investigations is a full service investigation company,
                specializing in investigating insurance fraud and in minimizing
                risk exposure.
              </AboutParagraphTwo>
              <AboutParagraphTwo>
                We are a leader in providing investigative services for
                insurance fraud in the Western Region because of our unique and
                distinct attributes. We possess the most comprehensive regional
                network of “Company Employed”​ investigators — No
                Subcontractors! Our Horses have proven, superior capabilities
                and we manage the entire process from start to finish,
                personalizing your service. Our approach is integrated; you will
                experience faster turnaround times and you can expect higher
                levels of consistent, unrivaled performance.
              </AboutParagraphTwo>
              <ButtonSquare title="learn more" />
            </Col>
          </Row>
        </Container>
      </ServicesMain>
    </Main>
  )
}

export default Services
