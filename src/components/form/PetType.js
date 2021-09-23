import React from 'react'
import {Form, FloatingLabel, Container, Button} from 'react-bootstrap'

const PetType = ({nextStep, handleChange, values}) => {

    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (
        <Container>
            <Form className="petType">
                <Button className='circleButton m-2' variant="outline-dark" size="lg" value='dog' onClick={handleChange('pet_type')}>Dog</Button>
                <Button className='circleButton m-2' variant="outline-dark" size="lg" value='cat' onClick={handleChange('pet_type')}>Cat</Button>
                <Button className='m-2' variant="outline-dark" size="sm" onClick={nextStep}>Next</Button>
            </Form>
        </Container>
    )
}

export default PetType
