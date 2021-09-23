import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function ButtonBox() {

    let counter;

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center p-4">
            <Button onClick={counter = true} className='circleButton m-2' variant="outline-dark" size="lg">
                LOST
            </Button>
            <Button onClick={counter = false} className='circleButton m-2' variant="outline-dark" size="lg">
                FOUND
            </Button>
        </Container>
    )
}

export default ButtonBox
