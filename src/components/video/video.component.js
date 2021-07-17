import React from "react"

import { VideoMain } from "./video.styles"

const Video = ({ posterImage, videoSrc, ...props }) => {
  return (
    <VideoMain
      poster={posterImage}
      preload="auto"
      loop
      autoPlay
      muted="true"
      playsInline
      {...props}
    >
      <source src={videoSrc} type="video/mp4" />
    </VideoMain>
  )
}

export default Video
