import React from "react"

import { VideoMain } from "./video.styles"

import posterImage from "../../images/particles-compressed.jpg"
import HeroVideo from "../../videos/particles-compressed.mp4"

const Video = () => {
  return (
    <VideoMain
      poster={posterImage}
      preload="auto"
      loop
      autoPlay
      muted="true"
      playsInline
    >
      <source src={HeroVideo} type="video/mp4" />
    </VideoMain>
  )
}

export default Video
