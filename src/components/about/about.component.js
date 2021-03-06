import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import BackgroundImage from "gatsby-background-image"
import SectionTitle from "../section-title/section-title.component"

import { Main, ImageContainer, AboutParagraph } from "./about.styles"

const About = () => {
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
      <Container>
        <Row>
          <Col lg={6} md={12} className="padding-right">
            <SectionTitle
              title="client-centric investigation"
              desc="horsemen ride together"
              textAlignLeft
            />
            <AboutParagraph data-aos="fade-up">
              Horsemen Investigations is a full service investigation company,
              specializing in investigating insurance fraud and in minimizing
              risk exposure.
            </AboutParagraph>
            <AboutParagraph data-aos="fade-up">
              We are a leader in providing investigative services for insurance
              fraud in the Western Region because of our unique and distinct
              attributes. We possess the most comprehensive regional network of
              “Company Employed”​ investigators — No Subcontractors! Our Horses
              have proven, superior capabilities and we manage the entire
              process from start to finish, personalizing your service. Our
              approach is integrated; you will experience faster turnaround
              times and you can expect higher levels of consistent, unrivaled
              performance.
            </AboutParagraph>
          </Col>
          <ImageContainer>
            <BackgroundImage fluid={camoImage} />
          </ImageContainer>
        </Row>
      </Container>
    </Main>
  )
}

export default About
