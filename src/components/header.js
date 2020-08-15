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
      <Navbar.Brand href="#home">CountryCodesDB</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Navbar.Text>
            Country Data for {Countries.length} Countries
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
