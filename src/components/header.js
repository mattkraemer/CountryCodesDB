import { Link } from "gatsby"
import React from "react"
import Countries from "../assets/countries.json"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

const Header = () => (
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
)

export default Header
