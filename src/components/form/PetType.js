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
                <Button className='circleButton m-2' variant="outline-dark" size="lg" value='dog' onClick={handleChange('pet_type')}>Dog</Button>
                <Button className='circleButton m-2' variant="outline-dark" size="lg" value='cat' onClick={handleChange('pet_type')}>Cat</Button>
                <Button className='circleButton m-2' variant="outline-dark" size="lg" onClick={Continue}>Next</Button>
            </Form>
        </Container>
    )
}

export default PetType