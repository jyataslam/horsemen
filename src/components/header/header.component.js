import * as React from "react"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"

import Sidenav from "../sidenav/sidenav.component"

import logo from "../../images/logo_header-white.png"
import HamburgerOpen from "../../images/hamburger_open.png"

import {
  Main,
  LogoContainer,
  Logo,
  LinksContainer,
  Link,
  InvestigationButtonContainer,
  InvestigationButton,
  NavBtnContainer,
  Hamburger,
} from "./header.styles"

const Header = () => {
  const [sticky, setSticky] = useState(false)
  const [open, isOpen] = useState(false)

  const handleScroll = () => {
    window.scrollY > 70 ? setSticky(true) : setSticky(false)
  }

  const handleSidenavClick = () => {
    if (!open) {
    }
    isOpen(!open)
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
            className="d-flex justify-content-space-between align-items-center height-100"
          >
            <NavBtnContainer>
              <Hamburger src={HamburgerOpen} onClick={handleSidenavClick} />
            </NavBtnContainer>
            <Sidenav isOpen={open} handleSidenavClick={handleSidenavClick} />
            <LogoContainer>
              <Logo src={logo} alt="horsemen inc logo" />
            </LogoContainer>
            <LinksContainer className="d-flex justify-content-center align-items-center">
              <Link>home</Link>
              <Link>services</Link>
              <Link>about</Link>
              <Link>contact</Link>
            </LinksContainer>
            <InvestigationButtonContainer>
              <InvestigationButton>start investigation</InvestigationButton>
            </InvestigationButtonContainer>
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
