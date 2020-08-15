import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Countries from "../assets/countries.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      {
        Countries.map((country, index) => (
          <div>
            {JSON.stringify(country)}
          </div>
        ))
      }
    </div>
  </Layout>
)

export default IndexPage
