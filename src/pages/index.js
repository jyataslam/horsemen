import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/hero.component"
import About from "../components/about/about.component"
import VideoSection from "../components/video-section/video-section.component"
import StickyVideo from "../components/sticky-video/sticky-video.component"
import Services from "../components/services/services.component"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <VideoSection />
      <StickyVideo />
      <Services />
    </Layout>
  )
}

export default IndexPage
