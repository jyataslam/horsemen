import * as React from "react"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"

import logo from "../../images/logo_header-white.png"

import {
  Main,
  LogoContainer,
  Logo,
  LinksContainer,
  Link,
  InvestigationButtonContainer,
  InvestigationButton,
} from "./header.styles"

const Header = () => {
  const [sticky, setSticky] = useState(false)

  const handleScroll = () => {
    window.scrollY > 70 ? setSticky(true) : setSticky(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sticky])

  return (
    <Main className={sticky ? "scrolled" : null}>
      <Container
        fluid
        className="height-100"
        style={{ "padding-left": "0", "padding-right": "0" }}
      >
        <Row className="height-100">
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center height-100"
          >
            <LinksContainer className="d-flex justify-content-flex-end align-items-center">
              <Link>home</Link>
              <Link>services</Link>
            </LinksContainer>
            <LogoContainer>
              <Logo src={logo} alt="horsemen inc logo" />
            </LogoContainer>
            <LinksContainer className="d-flex justify-content-space-between align-items-center">
              <div className="d-flex">
                <Link>about us</Link>
                <Link>contact</Link>
              </div>
              <InvestigationButtonContainer>
                <InvestigationButton>start investigation</InvestigationButton>
              </InvestigationButtonContainer>
            </LinksContainer>
          </Col>
        </Row>
      </Container>
    </Main>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
