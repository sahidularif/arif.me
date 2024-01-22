import React, { Component } from 'react'
import {TypeAnimation} from 'react-type-animation'
import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  const steps = [
    'Hello 👋!!! I am', 1000, ''
  ];
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <TypeAnimation
              sequence={steps}
              speed={50}
              wrapper="p"
              repeat={Infinity}
            />
            <h1>Sahidul Arif</h1>
            <h3>Full-Stack Web Developer</h3><br />

            <div className="action">
              <Button
                link="https://drive.google.com/file/d/1VkVozo8USeeZ4QKlafe2FUf4rVTKJAIc/view?usp=sharing"
                target="__blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }
