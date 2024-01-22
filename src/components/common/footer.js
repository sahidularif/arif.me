import React from "react"
import { FaAngleUp, FaStar, FaCodeBranch } from "react-icons/fa"
import { Container } from "./container"

import "./footer.css"

export const Footer = () => {
  
  const handleScrollTop = e => {
    e.preventDefault()
    window.scroll({ top: 0, left: 0, behavior: "smooth" })
  }
  const handleScroll = e => {
    e.preventDefault()
    const hash = e.target.hash
    const el = document.querySelector(hash)
    const offsetTop = el.offsetTop

    if (typeof window !== `undefined`) {
      window.scrollTo({
        top: offsetTop,
        left: 0,
        behavior: "smooth",
      })
    }
  }
  return (
    <footer className="footer-area">
      <Container padding="50px 25px">
        <div className="footer">
          <div className="language">
            <ul className="menubar">
              <li>
                <a onClick={handleScroll} href="#about">
                  About
              </a>
              </li>
              <li>
                <a onClick={handleScroll} href="#skill">
                  Skill
              </a>
              </li>
              <li>
                <a onClick={handleScroll} href="#portfolio">
                  Portfolio
              </a>
              </li>
              <li>
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://sahidularif1.medium.com/"
                >
                  Blog
              </a>
              </li>
            </ul>
          </div>
          <div className="copyright">
            <ul className="github">
              <li>
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sahidularif/arif.me"
                >
                  <p>
                    <FaStar /> Star
                  </p>
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sahidularif/arif.me"
                >
                  <p>
                    <FaCodeBranch /> Fork
                  </p>
                </a>
              </li>
            </ul>
            <p>
              By Me{" "}
              <span onClick={handleScrollTop}>
                <FaAngleUp />
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
