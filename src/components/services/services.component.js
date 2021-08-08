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
        matt: file(relativePath: { eq: "hero_chess.jpeg" }) {
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

  const mattImage = data.matt.childImageSharp.fluid

  return (
    <Main>
      <HeadlineCenter title="services" />
      <ServicesMain>
        <Container>
          <Row>
            <Col lg={6} md={12} className="padding-right">
              <SectionTitle
                title="The Horsemen Advantage"
                desc="Unrivaled Expertise"
                textAlignLeft
              />
              <AboutParagraph data-aos="fade-up">
                Proudly, Horsemen Investigations has built a reputation in the
                insurance fraud industry as a lead provider of services which
                are considered “Best in Class.” We retain the most comprehensive
                and fully-integrated network of qualified investigative
                specialists throughout the states of California and Hawaii, with
                expanding reach throughout the western region. The facts remain:
                nobody in our profession has more “proven” insurance fraud
                expertise or success at gathering field intelligence in the
                western region than Horsemen.
              </AboutParagraph>
              <AboutParagraph data-aos="fade-up">
                Allow us to personalize our services to meet your unique needs.
              </AboutParagraph>
              <ButtonSquare title="learn more" />
            </Col>
            <ImageContainer>
              <BackgroundImage fluid={mattImage} />
            </ImageContainer>
          </Row>
        </Container>
      </ServicesMain>
      <ServicesMain>
        <Container>
          <Row>
            <ImageContainerTwo>
              <BackgroundImage fluid={mattImage} />
            </ImageContainerTwo>
            <Col lg={{ span: 5, offset: 7 }} md={12} className="padding-right">
              <SectionTitle
                title="service headline two"
                desc="tagline two"
                textAlignLeft
              />
              <AboutParagraphTwo data-aos="fade-up">
                Horsemen Investigations is a full service investigation company,
                specializing in investigating insurance fraud and in minimizing
                risk exposure.
              </AboutParagraphTwo>
              <AboutParagraphTwo data-aos="fade-up">
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
