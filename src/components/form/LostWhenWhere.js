import {React} from 'react'
import {Container, Button, FormLabel, Form} from 'react-bootstrap'

const LostWhenWhere = ({nextStep, prevStep, handleChange, values}) => {


    return (
        <>
        <Container>
            <h1>When/Where</h1>


            <Form>
            <Form.Group className="mb-3">
                <FormLabel>When was {values.pet_name} lost?</FormLabel>
                <Form.Control onChange={handleChange('date_lost')} id="lost-date" type="datetime-local" name="lost-date"/>
            </Form.Group>

            <Form.Group className="mb-3">
                <FormLabel>ZIP code where {values.sex === "M" ? <span> he</span> : <span>she</span>} was last seen?</FormLabel>
                <Form.Control onChange={handleChange('zip_code')}
                id="zip_code" type="type" name="zip_code"/>
            </Form.Group>
            </Form>

            <Button className='m-2' variant="outline-dark" size="sm" onClick={prevStep}>Previous</Button>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={nextStep}>Next</Button>
        </Container>
        </>
    )
}

export default LostWhenWhere
