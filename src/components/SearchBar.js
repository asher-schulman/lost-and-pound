import React from 'react'
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap'

function SearchBar() {
    return (
        <Container className='d-flex'>
            <FloatingLabel
                controlId="floatingInput"
                label="search for lost pets"
                className="mb-3"
            >
                <Form.Control type="input" placeholder="12345" />
            </FloatingLabel>
            <Button className='m-3'>
                Search
            </Button>
        </Container>
    )
}

export default SearchBar
