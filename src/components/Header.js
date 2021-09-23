import React from 'react'
import {Navbar, NavDropdown, Nav, Container, Image} from 'react-bootstrap'
import logo from "../FINAL-LOGO.png"


function Header() {
    return (
        <Navbar className="footer" bg="#F6F2E5" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Image className="logoimg" src={logo} rounded />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">I've Lost a Pet</Nav.Link>
                        <Nav.Link href="#link">I've Found a Pet</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
