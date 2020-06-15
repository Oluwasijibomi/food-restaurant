import React from "react"
import {Navbar} from "react-bootstrap"

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Navbar>

    )
  }
} 

export default NavBar