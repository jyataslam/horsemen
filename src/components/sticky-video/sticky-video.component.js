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
                    </div>
                  </Tween>
                  <Timeline
                    target={
                      <div className="heading">
                        <div className="heading-container">
                          <h2>Guarding Your Investment</h2>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Natus quam ullam veritatis cum ad similique
                            voluptatibus a alias pariatur commodi, numquam nemo
                            delectus neque, quas quisquam, quaerat saepe in
                            odio.
                          </p>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Natus quam ullam veritatis cum ad similique
                            voluptatibus a alias pariatur commodi, numquam nemo
                            delectus neque, quas quisquam, quaerat saepe in
                            odio.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus obcaecati eligendi consequatur vel
                            amet voluptatum ullam nemo deleniti doloremque
                            dolores maiores autem dolorum, vero et laborum
                            quasi! Architecto, veniam laboriosam!
                          </p>
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
                          <h2>Another Headline Here</h2>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Natus quam ullam veritatis cum ad similique
                            voluptatibus a alias pariatur commodi, numquam nemo
                            delectus neque, quas quisquam, quaerat saepe in
                            odio.
                          </p>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Natus quam ullam veritatis cum ad similique
                            voluptatibus a alias pariatur commodi, numquam nemo
                            delectus neque, quas quisquam, quaerat saepe in
                            odio.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus obcaecati eligendi consequatur vel
                            amet voluptatum ullam nemo deleniti doloremque
                            dolores maiores autem dolorum, vero et laborum
                            quasi! Architecto, veniam laboriosam!
                          </p>
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
                          <h2>And Another One Here</h2>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Natus quam ullam veritatis cum ad similique
                            voluptatibus a alias pariatur commodi, numquam nemo
                            delectus neque, quas quisquam, quaerat saepe in
                            odio.
                          </p>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Natus quam ullam veritatis cum ad similique
                            voluptatibus a alias pariatur commodi, numquam nemo
                            delectus neque, quas quisquam, quaerat saepe in
                            odio.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus obcaecati eligendi consequatur vel
                            amet voluptatum ullam nemo deleniti doloremque
                            dolores maiores autem dolorum, vero et laborum
                            quasi! Architecto, veniam laboriosam!
                          </p>
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
