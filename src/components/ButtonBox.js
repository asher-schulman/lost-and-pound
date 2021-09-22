import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function ButtonBox() {
    return (
        <Container className="d-flex flex-column align-items-center justify-content-center p-4">
            <Button className='circleButton m-2' variant="primary" size="lg">
                LOST
            </Button>
            <Button className='circleButton m-2' variant="primary" size="lg">
                FOUND
            </Button>
        </Container>
    )
}

export default ButtonBox
