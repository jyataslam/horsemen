import * as React from "react"
import { useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/hero.component"
import About from "../components/about/about.component"
import VideoSection from "../components/video-section/video-section.component"
import Guarantee from "../components/guarantee/guarantee.component"
import Services from "../components/services/services.component"
import ServicesList from "../components/services-list/services-list.component"
import Areas from "../components/areas/areas.component"
import TeamJumbo from "../components/team-jumbo/team-jumbo.component"
import InvestigationAction from "../components/investigation-action-section/investigation-action.component"

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    })
    AOS.refresh()
  })

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <VideoSection />
      <Guarantee />
      <Services />
      <ServicesList />
      <Areas />
      <TeamJumbo />
      <InvestigationAction />
    </Layout>
  )
}

export default IndexPage
