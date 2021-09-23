import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import { LogoLinkedin } from 'react-ionicons'

function Footer() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="footer">
                <div>
                    <ul>
                        Software Engineers
                    </ul>
                    <li>Asher Schulman
                    <LogoLinkedin
                      color={'#00000'}
                      title="LinkedIn"
                      height="25px"
                      width="25px"
                    />
                    </li>
                    <li>Cavell Wong
                    <LogoLinkedin
                      color={'#00000'}
                      title="LinkedIn"
                      height="25px"
                      width="25px"
                    />

                    </li>
                </div>

                <div>
                    <ul>
                        UX Designers
                    </ul>
                    <li>Andrea Murray
                    <LogoLinkedin
                      color={'#00000'}
                      title="LinkedIn"
                      height="25px"
                      width="25px"
                    />
                    </li>
                    <li>Sara Reid
                    <LogoLinkedin
                      color={'#00000'}
                      title="LinkedIn"
                      height="25px"
                      width="25px"
                    />
                    </li>
                </div>
            </Container>
        </Navbar>
    )
}

export default Footer
