import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import logoLongSrc from "../images/logo_long.svg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <img src={logoLongSrc} alt="logo" />
      <h1>coming soon...</h1>
    </Layout>
  )
}

export default IndexPage
