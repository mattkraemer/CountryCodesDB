import React, { useState, useContext } from "react"

import SEO from "../components/seo"

import Countries from "../assets/countries.json"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

const IndexPage = () => {
  const [ query, setQuery ] = useState();
  return (
    <>
      <SEO title="Home" />
      <Navbar bg="transparent" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="mr-0"><span className="font-weight-light">CountryCodes</span><span className="font-weight-normal">DB</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="w-100 mx-5">
              <FormControl onChange={(event) => setQuery(event.currentTarget.value)} type="text" placeholder="Search for a Country..." className="w-100 border-0 shadow-lg" />
            </Form>
            <Nav className="ml-auto">
              <Navbar.Text className="text-truncate">
                Country Data for {Countries.length} Countries
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="my-4">{query}
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
    </>
  )
}

export default IndexPage
