import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Video from "../video/video.component"

import HorsemanYoutubeVideo from "../../videos/Untitled.mp4"

import { Main } from "./video-section.styles"

const VideoSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImg: file(relativePath: { eq: "video-screengrab.jpg" }) {
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

  const placeholderImage = data.placeholderImg.childImageSharp.fluid

  return (
    <Main>
      <Video
        posterImage={placeholderImage}
        videoSrc={HorsemanYoutubeVideo}
        opacity
      />
    </Main>
  )
}

export default VideoSection
