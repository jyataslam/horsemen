import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Container, Row, Col } from "react-bootstrap"

import ButtonSquare from "../button-square/button-square.component"

import cameraPNG from "../../images/camera-icon.png"

import {
  Main,
  Header,
  Subheader,
  ServiceImage,
  IndividualHeader,
  IndividualDesc,
} from "./services-list.styles"

const ServicesList = () => {
  const data = useStaticQuery(
    graphql`
      query {
        bgImage: file(relativePath: { eq: "camera.jpg" }) {
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

  const chessImage = data.bgImage.childImageSharp.fluid

  return (
    <Main>
      <BackgroundImage fluid={chessImage} className="services-bg-image">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} md={12}>
              <Header>Full range of Services</Header>
              <Subheader>
                Make the best decisions quickly and efficiently with the right
                investigative tools. At Horsemen, each investigation is
                customized to your specific needs, ensuring you get the vital
                information at the right time. That’s The Horsemen Advantage.
              </Subheader>
            </Col>
            <Col
              sm={12}
              className="d-flex flex-wrap justify-content-center align-items-center"
            >
              <Col
                lg={4}
                md={6}
                sm={12}
                className="individual-service-col"
                data-aos="fade-up"
              >
                <ServiceImage src={cameraPNG} />
                <IndividualHeader>Serveillance (Sub Rosa)</IndividualHeader>
                <IndividualDesc>
                  Brief description of above service goes here.
                </IndividualDesc>
              </Col>
              <Col
                lg={4}
                md={6}
                sm={12}
                className="individual-service-col"
                data-aos="fade-up"
              >
                <ServiceImage src={cameraPNG} />
                <IndividualHeader>Strategic Interviewing</IndividualHeader>
                <IndividualDesc>
                  Brief description of above service goes here.
                </IndividualDesc>
              </Col>
              <Col
                lg={4}
                md={6}
                sm={12}
                className="individual-service-col"
                data-aos="fade-up"
              >
                <ServiceImage src={cameraPNG} />
                <IndividualHeader>DOI Certified Training</IndividualHeader>
                <IndividualDesc>
                  Brief description of above service goes here.
                </IndividualDesc>
              </Col>
              <Col
                lg={4}
                md={6}
                sm={12}
                className="individual-service-col"
                data-aos="fade-up"
              >
                <ServiceImage src={cameraPNG} />
                <IndividualHeader>Scene Investigation</IndividualHeader>
                <IndividualDesc>
                  Brief description of above service goes here.
                </IndividualDesc>
              </Col>
              <Col
                lg={4}
                md={6}
                sm={12}
                className="individual-service-col"
                data-aos="fade-up"
              >
                <ServiceImage src={cameraPNG} />
                <IndividualHeader>Verifications</IndividualHeader>
                <IndividualDesc>
                  Brief description of above service goes here.
                </IndividualDesc>
              </Col>
              <Col
                lg={4}
                md={6}
                sm={12}
                className="individual-service-col"
                data-aos="fade-up"
              >
                <ServiceImage src={cameraPNG} />
                <IndividualHeader>Legal Support</IndividualHeader>
                <IndividualDesc>
                  Brief description of above service goes here.
                </IndividualDesc>
              </Col>
              <Col
                lg={4}
                md={6}
                sm={12}
                className="individual-service-col"
                data-aos="fade-up"
              >
                <ServiceImage src={cameraPNG} />
                <IndividualHeader>Digital Support</IndividualHeader>
                <IndividualDesc>
                  Brief description of above service goes here.
                </IndividualDesc>
              </Col>
              <Col
                lg={4}
                md={6}
                sm={12}
                className="individual-service-col"
                data-aos="fade-up"
              >
                <ServiceImage src={cameraPNG} />
                <IndividualHeader>Consulting</IndividualHeader>
                <IndividualDesc>
                  Brief description of above service goes here.
                </IndividualDesc>
              </Col>
            </Col>
            <ButtonSquare title="explore services" />
          </Row>
        </Container>
      </BackgroundImage>
    </Main>
  )
}

export default ServicesList
