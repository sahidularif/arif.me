import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I'm Sahidul Arif, Front-End Web Developer. I
              develop web applications. My core skill is based on JavaScript. I studied Computer Science & Technology, and during my studies I got in contact with the basic concepts of programming. Since then I've always wanted to become a developer and I love to do most of the things using JavaScript.
              I love to make the web more open to the world.
              
            </p>
            <div className="about-action">
              <Button
                link="https://github.com/sahidularif/arif.me/blob/main/src/data/file/MyResume.pdf"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
