/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import "../styles/style.css"
import Countries from "../assets/countries.json"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: ''
        }}
      />
      <Navbar bg="transparent" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="mr-0"><span className="font-weight-light">CountryCodes</span><span className="font-weight-normal">DB</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="w-100 mx-5">
              <FormControl type="text" placeholder="Search for a Country..." className="w-100 border-0 shadow-lg" />
            </Form>
            <Nav className="ml-auto">
              <Navbar.Text className="text-truncate">
                Country Data for {Countries.length} Countries
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
