import React from "react"
import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
} from "react-icons/fa"

import "./title.css"

export const Title = ({ title, social, side, height }) => {
  return (
    <div
      style={{ height }}
      className={`title ${side} ${social ? "social" : ""}`}
    >
      {social && (
        <ul>
          <li>
            <a
              target="blank"
              rel="any"
              href="https://github.com/sahidularif/"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="blank"
              rel="any"
              href="https://www.linkedin.com/in/sahidul-arif-761196162/"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              target="blank"
              rel="any"
              href="https://medium.com/@sahidularif1"
            >
              <FaMediumM />
            </a>
          </li>
        </ul>
      )}
      <p>{title}</p>
    </div>
  )
}

Title.defaultProps = {
  side: "left",
  height: "160px",
}
