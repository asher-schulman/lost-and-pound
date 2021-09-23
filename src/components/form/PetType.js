import React from 'react'
import {Form, Container, Button} from 'react-bootstrap'

const PetType = ({nextStep, handleChange, values}) => {

    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (
        <Container>
            <Form>
                <Button value='dog' onClick={handleChange('pet_type')}>Dog</Button>
                <Button value='cat' onClick={handleChange('pet_type')}>Cat</Button>
                <Button onClick={Continue}>Next</Button>
            </Form>
        </Container>
    )
}

export default PetType
