import React from "react"

import {
  Intro,
  Portfolio,
  About,
  Skill,
  Contact,
} from "../components"
import { Layout, Seo } from "../components/common"

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Sahidul Arif" />
      <Intro />
      <About />
      <Skill />
      {/* <LoveToDo /> */}
      <Portfolio />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
