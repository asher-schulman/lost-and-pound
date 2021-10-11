import React from 'react'
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
import { LogoLinkedin, LogoGithub, Link } from 'react-ionicons'

function Footer() {
    // <Row>
    //     <Col>
    //     <ul>
    //         Software Engineers
    //     </ul>
    //     <li>Asher Schulman
    //     <Nav.Link href="https://github.com/asher-schulman">
    //     <LogoGithub
    //     to="https://github.com/asher-schulman"
    //     color={'#00000'}
    //     title="Github"
    //     height="25px"
    //     width="25px"/>
    //     </Nav.Link>
    //     </li>
    //
    //     <li>Cavell Wong
    //     <Nav.Link href="https://www.linkedin.com/in/cavellw/">
    //     <LogoLinkedin
    //     color={'#00000'}
    //     title="LinkedIn"
    //     height="25px"
    //     width="25px"/>
    //     </Nav.Link>
    //
    //     <Nav.Link href="https://github.com/cavellerson">
    //     <LogoGithub
    //     color={'#00000'}
    //     title="Github"
    //     height="25px"
    //     width="25px"/>
    //     </Nav.Link>
    //     </li>
    //     </Col>
    //
    //
    //
    //
    //
    //     <ul>
    //         UX Designers
    //     </ul>
    //     <li>Andrea Murray
    //
    //     <Nav.Link href="https://www.linkedin.com/in/andreakmurray/">
    //     <LogoLinkedin
    //     color={'#00000'}
    //     title="LinkedIn"
    //     height="25px"
    //     width="25px"/>
    //     </Nav.Link>
    //     </li>
    //     <li>Sara Reid
    //
    //     <Nav.Link href="https://www.linkedin.com/in/saraeletareid/">
    //     <LogoLinkedin
    //     color={'#00000'}
    //     title="LinkedIn"
    //     height="25px"
    //     width="25px"/>
    //     </Nav.Link>
    //
    //     <Nav.Link href="https://www.saraeletaux.com/">
    //     <Link
    //     color={'#00000'}
    //     title="Portfolio"
    //     height="25px"
    //     width="25px"/>
    //     </Nav.Link>
    //
    //     </li>
    // </Row>
    return (
        <Navbar bg="#F6F2E5" expand="lg">
            <Container fluid className="footer">
                        <Row>
                            <Col>
                            <Container className="footer-person">
                            <h6>Asher Schulman</h6>
                            <Nav.Link href="https://github.com/asher-schulman">
                            <LogoGithub
                            to="https://github.com/asher-schulman"
                            color={'#00000'}
                            title="Github"
                            height="25px"
                            width="25px"/>
                            </Nav.Link>
                            </Container>

                            <Container className="footer-person">
                            <h6>Cavell Wong</h6>
                            <Nav.Link href="https://www.linkedin.com/in/cavellw/">
                            <LogoLinkedin
                            color={'#00000'}
                            title="LinkedIn"
                            height="25px"
                            width="25px"/>
                            </Nav.Link>

                            <Nav.Link href="https://github.com/cavellerson">
                            <LogoGithub
                            color={'#00000'}
                            title="Github"
                            height="25px"
                            width="25px"/>
                            </Nav.Link>
                            </Container>
                            </Col>

                            <Col>
                            <Container className="footer-person">
                            <h6>Andrea Murray</h6>
                            <Nav.Link href="https://www.linkedin.com/in/andreakmurray/">
                            <LogoLinkedin
                            color={'#00000'}
                            title="LinkedIn"
                            height="25px"
                            width="25px"/>
                            </Nav.Link>
                            </Container>

                            <Container className="footer-person">
                            <h6>Sara Reid</h6>
                            <Nav.Link href="https://www.linkedin.com/in/saraeletareid/">
                            <LogoLinkedin
                            color={'#00000'}
                            title="LinkedIn"
                            height="25px"
                            width="25px"/>
                            </Nav.Link>

                            <Nav.Link href="https://www.saraeletaux.com/">
                            <Link
                            color={'#00000'}
                            title="Portfolio"
                            height="25px"
                            width="25px"/>
                            </Nav.Link>
                            </Container>
                            </Col>
                        </Row>




            </Container>
        </Navbar>
    )
}

export default Footer
