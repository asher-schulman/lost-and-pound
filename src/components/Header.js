import React from 'react'
import {Navbar, NavDropdown, Nav, Container, Image} from 'react-bootstrap'
import logo from "../FINAL-LOGO.png"


function Header() {
    return (
        <Navbar bg="#F6F2E5" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Image className="logoimg" src={logo} rounded />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">I've Lost a Pet</Nav.Link>
                        <Nav.Link href="#link">I've Found a Pet</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
