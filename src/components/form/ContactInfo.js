import React from 'react'
import {Form, FloatingLabel, Container, Button} from 'react-bootstrap'

const ContactInfo = ({nextStep, prevStep, handleChange, values}) => {
    return (
        <Container>
            <h1>Lost Pet Owner's Contact Info</h1>
            <p> How can others contact you about {values.pet_name}? </p>
            <FloatingLabel controlId="floatingTextarea" label={`Email`} className="mb-3">
              <Form.Control as="textarea" onChange={handleChange('email')}placeholder="Email" />
            </FloatingLabel>


            <FloatingLabel controlId="floatingTextarea" label={`Phone Number`} className="mb-3">
              <Form.Control as="textarea" onChange={handleChange('phone_number')}placeholder="Phone Number" />
            </FloatingLabel>

            <Button className='m-2' variant="outline-dark" size="sm" onClick={prevStep}>Previous</Button>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={nextStep}>Next</Button>

        </Container>
    )
}

export default ContactInfo
