import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { StaticImage } from "gatsby-plugin-image"

import HeadlineCenter from "../headline-center/headline-center.component"
import ButtonSquare from "../button-square/button-square.component"

import {
  Main,
  MainContainer,
  Header,
  Subheader,
  Text,
  FlexContainer,
  TextContainer,
  Headline,
} from "./areas.styles"

const Areas = () => {
  const data = useStaticQuery(
    graphql`
      query {
        globeImg: file(relativePath: { eq: "globe-dark.jpg" }) {
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

  const globeImage = data.globeImg.childImageSharp.fluid

  return (
    <Main>
      <HeadlineCenter title="service areas" />
      <BackgroundImage fluid={globeImage} className="bg-image">
        <MainContainer>
          <Container>
            <Row>
              <Col lg={{ span: 8, offset: 2 }} md={12}>
                <Header>We've got you covered</Header>
                <Subheader>
                  Horsemen’s operational size and reach primarily covers the
                  entire states of California, Hawaii, Nevada, Arizona, and also
                  extends across other parts of the western region of the United
                  States. We are also licensed in Washington, Oregon, New
                  Mexico, and Texas.
                </Subheader>
              </Col>
              <Col sm={12}>
                <FlexContainer>
                  <TextContainer>
                    <Headline data-aos="fade-up">where we ride</Headline>
                    <Text data-aos="fade-up">
                      Proudly, Horsemen Investigations has built a reputation in
                      the insurance fraud industry as a lead provider of
                      services which are considered “Best in Class.” We retain
                      the most comprehensive and fully-integrated network of
                      qualified investigative specialists throughout the states
                      of California and Hawaii, with expanding reach throughout
                      the western region. The facts remain: nobody in our
                      profession has more “proven” insurance fraud expertise or
                      success at gathering field intelligence in the western
                      region than Horsemen.
                    </Text>
                    <Headline data-aos="fade-up">claims supported</Headline>
                    <Text data-aos="fade-up">
                      Workers’ Compensation, Personal & Bodily Injury, Life &
                      Disability, Property Loss & Liability, Longshore,
                      Casualty, Auto and other lines of insurance.
                    </Text>
                    <ButtonSquare title="learn more" />
                  </TextContainer>
                  <StaticImage
                    src="../../images/service-areas-map.jpg"
                    className="map-img"
                  />
                </FlexContainer>
              </Col>
            </Row>
          </Container>
        </MainContainer>
      </BackgroundImage>
    </Main>
  )
}

export default Areas
