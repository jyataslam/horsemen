import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SectionTitle from "../section-title/section-title.component"

import { Main } from "./about.styles"

const About = () => {
  return (
    <Main>
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <SectionTitle
              title="horsemen's service assurance"
              desc="We've got you covered"
              textAlignLeft
            />
          </Col>
        </Row>
      </Container>
    </Main>
  )
}

export default About
