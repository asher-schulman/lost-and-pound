import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import { LogoLinkedin, LogoGithub, Link } from 'react-ionicons'

function Footer() {
    return (
        <Navbar bg="#F6F2E5" expand="lg">
            <Container className="footer">
                <div>
                    <ul>
                        Software Engineers
                    </ul>
                    <li>Asher Schulman
                    <a href="https://github.com/asher-schulman">
                    <LogoGithub
                      color={'#00000'}
                      title="Github"
                      height="25px"
                      width="25px"
                    />
                    </a>

                    </li>
                    <li>Cavell Wong
                    <a href= "https://www.linkedin.com/in/cavellw/">
                    <LogoLinkedin
                      color={'#00000'}
                      title="LinkedIn"
                      height="25px"
                      width="25px"/>
                    </a>

                    <a href="https://github.com/cavellerson">
                    <LogoGithub
                      color={'#00000'}
                      title="Github"
                      height="25px"
                      width="25px"/>
                    </a>
                    </li>

                </div>

                <div>
                    <ul>
                        UX Designers
                    </ul>
                    <li>Andrea Murray
                    <a href="https://www.linkedin.com/in/andreakmurray/">
                    <LogoLinkedin
                      color={'#00000'}
                      title="LinkedIn"
                      height="25px"
                      width="25px"/>
                    </a>
                    </li>
                    <li>Sara Reid
                    <a href="https://www.linkedin.com/in/saraeletareid/">
                    <LogoLinkedin
                      color={'#00000'}
                      title="LinkedIn"
                      height="25px"
                      width="25px"/>
                    </a>

                    <a href="https://www.saraeletaux.com/">
                    <Link
                      color={'#00000'}
                      title="Portfolio"
                      height="25px"
                      width="25px"/>
                    </a>
                    </li>
                </div>
            </Container>
        </Navbar>
    )
}

export default Footer
