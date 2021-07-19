import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"

import HorsemanLogo from "../../images/logo-large-min.png"

import { StickyMain } from "./sticky-video.styles"

const StickyVideo = () => {
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
    <StickyMain>
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <div>
          <Scene
            triggerHook="onLeave"
            duration={3000}
            pin
            style={{ display: "inline-block" }}
          >
            {progress => (
              <div className="sticky">
                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{ top: "60%", opacity: 0 }}
                    to={{ top: "5%", opacity: 1 }}
                  >
                    <div className="animation">
                      <img
                        src={HorsemanLogo}
                        alt="horseman logo"
                        className="logo"
                      />
                      <h2>Tailored To Your Needs</h2>
                    </div>
                  </Tween>
                  <Timeline
                    target={
                      <div className="heading">
                        <div className="heading-container">
                          <h2>For Professionals</h2>
                          <ul>
                            <li>
                              Adjusters/Claims Representatives (Insurance
                              Companies)
                            </li>
                            <li>Risk Managers</li>
                            <li>HR Managers</li>
                            <li>Attorneys/Law Firms</li>
                            <li>
                              Government Entities (City, County, State,
                              Districts [school, etc], agencies)
                            </li>
                            <li>Investigation Companies</li>
                            <li>Real Estate Agents</li>
                            <li>Insurance Agents</li>
                          </ul>
                        </div>
                      </div>
                    }
                  >
                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                    <Tween to={{ x: "110%" }} />
                  </Timeline>
                  <Timeline
                    target={
                      <div className="heading">
                        <div className="heading-container">
                          <h2>For Individuals</h2>
                          <ul>
                            <li>Home Buyers/Sellers</li>
                          </ul>
                        </div>
                      </div>
                    }
                  >
                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                    <Tween to={{ x: "110%" }} />
                  </Timeline>
                  <Timeline
                    target={
                      <div className="heading">
                        <div className="heading-container">
                          <h2>Unique Scenarios</h2>
                          <ul>
                            <li>Cargo Theft</li>
                            <li>Sales Route Verification</li>
                            <li>Unique Situation 3</li>
                          </ul>
                        </div>
                      </div>
                    }
                  >
                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                  </Timeline>
                </Timeline>
              </div>
            )}
          </Scene>
        </div>
      </Controller>
    </StickyMain>
  )
}

export default StickyVideo
