import React from "react"
import { SocialIcon } from "react-social-icons"

import Logo from "../../images/logo_header-white.png"
import HamburgerClose from "../../images/Hamburger_close.png"

import {
  SidenavMain,
  SidenavHeader,
  SidenavLogo,
  HamburgerSpan,
  Hamburger,
  LinksContainer,
  LinkContainer,
  SidenavLink,
  SocialLinksContainer,
} from "./sidenav.styles"

const Sidenav = ({ isOpen, handleSidenavClick }) => (
  <SidenavMain className={isOpen ? "open" : null}>
    <SidenavHeader>
      <SidenavLogo src={Logo} alt="horsemen logo" />
      <HamburgerSpan onClick={handleSidenavClick}>
        <Hamburger src={HamburgerClose} />
      </HamburgerSpan>
    </SidenavHeader>
    <LinksContainer>
      <LinkContainer>
        <SidenavLink>home</SidenavLink>
      </LinkContainer>
      <LinkContainer>
        <SidenavLink>services</SidenavLink>
      </LinkContainer>
      <LinkContainer>
        <SidenavLink>about</SidenavLink>
      </LinkContainer>
      <LinkContainer>
        <SidenavLink>contact</SidenavLink>
      </LinkContainer>
      <LinkContainer>
        <SidenavLink>start investigation</SidenavLink>
      </LinkContainer>
    </LinksContainer>
    <SocialLinksContainer>
      <SocialIcon
        url="https://www.facebook.com/pg/HorsemenInc/"
        bgColor="transparent"
        fgColor="#eeeeee"
        style={{ height: "40px", width: "40px" }}
      />
      <SocialIcon
        url="https://twitter.com/horsemeninc"
        bgColor="transparent"
        fgColor="#eeeeee"
        style={{ height: "40px", width: "40px" }}
      />
      <SocialIcon
        url="https://www.instagram.com/horsemeninvestigations/"
        bgColor="transparent"
        fgColor="#eeeeee"
        style={{ height: "40px", width: "40px" }}
      />
      <SocialIcon
        url="https://www.linkedin.com/company/horsemen-investigations"
        bgColor="transparent"
        fgColor="#eeeeee"
        style={{ height: "40px", width: "40px" }}
      />
      <SocialIcon
        url="https://www.youtube.com/channel/UCnfMBrT3VvvRfhTvz9Cs2Ng"
        bgColor="transparent"
        fgColor="#eeeeee"
        style={{ height: "40px", width: "40px" }}
      />
    </SocialLinksContainer>
  </SidenavMain>
)

export default Sidenav
