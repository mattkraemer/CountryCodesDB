import React, { useState, useEffect } from "react"

import SEO from "../components/seo"

import CountriesJSON from "../assets/countries.json"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

const IndexPage = () => {
  const [ query, setQuery ] = useState("");
  const [ countries, setCountries ] = useState([]);
  const [ order, setOrder ] = useState("asc");
  const [ sortedBy, setSortedBy ] = useState("name");

  const sortCountries = (val1) => {
    setSortedBy(val1)
    setOrder(order === "asc" ? "desc" : "asc")
    if (order === "asc") {
      setCountries(countries.sort((a,b) => a.[val1].localeCompare(b.[val1])))
    } else if (order === "desc") {
      setCountries(countries.sort((a,b) => b.[val1].localeCompare(a.[val1])))
    }
  }

  useEffect(() => {
    setCountries(CountriesJSON.sort((a,b) => a.name.localeCompare(b.name)))
  }, []);

  return (
    <>
      <SEO title="Home" />
      <span className="header-bg bg-primary" />
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
                Country Data for {countries.length} Countries
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="my-2 text-light d-flex">
        {
          query &&
            <span className="mr-3">Search for: <span className="font-weight-bold">{query}</span></span>
        }
        <span>
          {countries.filter(function(entry) {
            return entry.name.toUpperCase().indexOf(query.toUpperCase()) !== -1;
          }).length} Countries found.
        </span>
        <span className="ml-auto">
          Sorted by <span className="text-capitalize">{sortedBy}</span>
        </span>
      </Container>
      <Container className="my-4">
        <Table striped borderless className="bg-white shadow-lg rounded-lg">
          <thead className="border-bottom">
            <tr>
              <th className="border-top-0" role="button" onClick={() => sortCountries("country-code")}>
                <span className="d-flex text-nowrap">
                  <span className="mr-3">#</span>
                  <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className={"bi bi-arrow-down-up ml-auto my-auto " + (sortedBy === "country-code" && "text-primary")} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                    <path fill-rule="evenodd" d="M10.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L11 3.707 8.354 6.354a.5.5 0 1 1-.708-.708l3-3zm-9 7a.5.5 0 0 1 .708 0L5 12.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M5 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </span>
              </th>
              <th className="border-top-0" role="button" onClick={() => sortCountries("name")}>
                <span className="d-flex text-nowrap">
                  <span className="mr-3">Country</span>
                  <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className={"bi bi-arrow-down-up ml-auto my-auto " + (sortedBy === "name" && "text-primary")} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                    <path fill-rule="evenodd" d="M10.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L11 3.707 8.354 6.354a.5.5 0 1 1-.708-.708l3-3zm-9 7a.5.5 0 0 1 .708 0L5 12.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M5 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </span>
              </th>
              <th className="border-top-0" role="button" onClick={() => sortCountries("alpha-2")}>
                <span className="d-flex text-nowrap">
                  <span className="mr-3">Alpha 2</span>
                  <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className={"bi bi-arrow-down-up ml-auto my-auto " + (sortedBy === "alpha-2" && "text-primary")} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                    <path fill-rule="evenodd" d="M10.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L11 3.707 8.354 6.354a.5.5 0 1 1-.708-.708l3-3zm-9 7a.5.5 0 0 1 .708 0L5 12.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M5 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </span>
              </th>
              <th className="border-top-0" role="button" onClick={() => sortCountries("alpha-3")}>
                <span className="d-flex text-nowrap">
                  <span className="mr-3">Alpha 3</span>
                  <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className={"bi bi-arrow-down-up ml-auto my-auto " + (sortedBy === "alpha-3" && "text-primary")} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                    <path fill-rule="evenodd" d="M10.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L11 3.707 8.354 6.354a.5.5 0 1 1-.708-.708l3-3zm-9 7a.5.5 0 0 1 .708 0L5 12.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M5 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </span>
              </th>
              <th className="border-top-0" role="button" onClick={() => sortCountries("region")}>
                <span className="d-flex text-nowrap">
                  <span className="mr-3">Region</span>
                  <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className={"bi bi-arrow-down-up ml-auto my-auto " + (sortedBy === "region" && "text-primary")} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                    <path fill-rule="evenodd" d="M10.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L11 3.707 8.354 6.354a.5.5 0 1 1-.708-.708l3-3zm-9 7a.5.5 0 0 1 .708 0L5 12.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M5 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </span>
              </th>
              <th className="border-top-0" role="button" onClick={() => sortCountries("sub-region")}>
                <span className="d-flex text-nowrap">
                  <span className="mr-3">Sub Region</span>
                  <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className={"bi bi-arrow-down-up ml-auto my-auto " + (sortedBy === "sub-region" && "text-primary")} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                    <path fill-rule="evenodd" d="M10.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L11 3.707 8.354 6.354a.5.5 0 1 1-.708-.708l3-3zm-9 7a.5.5 0 0 1 .708 0L5 12.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M5 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </span>
              </th>
              <th className="border-top-0" role="button" onClick={() => sortCountries("iso_3166-2")}>
                <span className="d-flex text-nowrap">
                  <span className="mr-3">ISO 3166-2</span>
                  <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className={"bi bi-arrow-down-up ml-auto my-auto " + (sortedBy === "iso_3166-2" && "text-primary")} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                    <path fill-rule="evenodd" d="M10.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L11 3.707 8.354 6.354a.5.5 0 1 1-.708-.708l3-3zm-9 7a.5.5 0 0 1 .708 0L5 12.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M5 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              countries.filter(function(entry) {
                return entry.name.toUpperCase().indexOf(query.toUpperCase()) !== -1;
              }).map((country, index) => (
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
            {
              countries.filter(function(entry) {
                return entry.name.toUpperCase().indexOf(query.toUpperCase()) !== -1;
              }).length == 0 &&
                <div className="p-3">
                  Nothing found.
                </div>
            }
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default IndexPage
