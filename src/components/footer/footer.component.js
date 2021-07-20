import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { SocialIcon } from "react-social-icons"

import {
  Main,
  LinkContainer,
  Link,
  LinkHeader,
  SocialContainer,
} from "./footer.styles"

const Footer = () => {
  return (
    <Main>
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <LinkContainer>
              <StaticImage
                src="../../images/logo_header-white.png"
                className="logo"
              />
              <Link>
                <p>
                  Horsemen Investigations is a full service investigation
                  company, specializing in investigating insurance fraud and in
                  minimizing risk exposure.
                </p>
              </Link>
            </LinkContainer>
          </Col>
          <Col lg={4} sm={12}>
            <LinkContainer>
              <LinkHeader>Contact Us</LinkHeader>
              <Link>
                <p>Phone: </p>
                <a href="tel:+18005319997">800.531.9997</a>
              </Link>
              <Link>
                <p>Fax: </p>
                <a href="tel:+17148407981">714.840.7981</a>
              </Link>
              <Link>
                <p>Office Hours: </p>
                <a>M-F, 8AM-5PM</a>
              </Link>
              <Link>
                <p>Location:</p>
                <a>Huntington Beach, CA</a>
              </Link>
              <Link>
                <p>Lic#</p>
                <a>17753</a>
              </Link>
            </LinkContainer>
          </Col>
          <Col lg={4} sm={12}>
            <LinkHeader>Add Us On Social</LinkHeader>
            <SocialContainer>
              <SocialIcon url="https://www.facebook.com/pg/HorsemenInc/" />
              <SocialIcon url="https://twitter.com/horsemeninc" />
              <SocialIcon url="https://www.instagram.com/horsemeninvestigations/" />
              <SocialIcon url="https://www.linkedin.com/company/horsemen-investigations" />
              <SocialIcon url="https://www.youtube.com/channel/UCnfMBrT3VvvRfhTvz9Cs2Ng" />
            </SocialContainer>
          </Col>
        </Row>
      </Container>
    </Main>
  )
}

export default Footer
