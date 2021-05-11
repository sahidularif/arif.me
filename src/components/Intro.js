import React, { Component } from 'react'
import Typical from 'react-typical'
import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  const steps = [
    'Hello 👋!!! I am', 1000,
  ];
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p><Typical wrapper="span" steps={steps} loop={1} className={'caca'} /></p>
            <h1>Sahidul Arif</h1>
            <h3>Front-End Developer</h3><br/>
            
            <div className="action">
              <Button
                link="https://github.com/sahidularif/arif.me/blob/main/src/data/file/MyResume.pdf"
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
