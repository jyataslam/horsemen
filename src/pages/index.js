import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/hero.component"
import About from "../components/about/about.component"
import VideoSection from "../components/video-section/video-section.component"
import Guarantee from "../components/guarantee/guarantee.component"
import Services from "../components/services/services.component"
import ServicesList from "../components/services-list/services-list.component"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <VideoSection />
      <Guarantee />
      <Services />
      <ServicesList />
    </Layout>
  )
}

export default IndexPage
