import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Countries from "../assets/countries.json"

import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container className="my-4">
      <Table striped hover className="bg-white shadow-lg rounded-lg">
        <thead>
          <tr>
            <th className="border-top-0">#</th>
            <th className="border-top-0">Country</th>
            <th className="border-top-0">Alpha 2</th>
            <th className="border-top-0">Alpha 3</th>
            <th className="border-top-0">Region</th>
            <th className="border-top-0">Sub Region</th>
            <th className="border-top-0">ISO 3166-2</th>
          </tr>
        </thead>
        <tbody>
          {
            Countries.map((country, index) => (
              <tr>
                <td>{country["country-code"]}</td>
                <td>{country["name"]}</td>
                <td>{country["alpha-2"]}</td>
                <td>{country["alpha-3"]}</td>
                <td>{country["region"]}</td>
                <td>{country["sub-region"]}</td>
                <td>{country["iso_3166-2"]}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  </Layout>
)

export default IndexPage
