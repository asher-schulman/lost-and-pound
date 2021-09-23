import React from 'react'
import {Form, FloatingLabel, Container, Button} from 'react-bootstrap'

const PetAttributes = ({nextStep, prevStep, handleChange, values}) => {
    return (
        <Container>
        {values.pet_type === "dog" ?
        <Form>



            <FloatingLabel controlId="floatingTextarea" label={`What's your ${values.pet_type}'s name?`} className="mb-3">
              <Form.Control as="textarea" onChange={handleChange('pet_name')}placeholder="pet name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Pet name">
            </FloatingLabel>



              <FloatingLabel controlId="floatingTextarea" label="Coat color" className="mb-3">
                <Form.Control as="textarea" onChange={handleChange('coat_color')}placeholder="Coat color" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Coat color">
              </FloatingLabel>


              <FloatingLabel controlId="floatingSelect" label="Eye color" >
              <Form.Select aria-label="Floating label select example" onChange={handleChange('eye_color')}>
                <option> </option>
                <option value="brown">Brown</option>
                <option value="amber">Amber</option>
                <option value="blue">Blue</option>
                <option value="hazel">Hazel</option>
                <option value="green">Green</option>
                <option value="complete Heterochromia">Complete Heterochromia</option>
                <option value="segmental Heterochromia">Segmental Heterochromia</option>
              </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingSelect" label="Age" >
              <Form.Select aria-label="Floating label select example" onChange={handleChange('age')}>
                <option> </option>
                <option value="0">Puppy</option>
                <option value="1">Adult</option>
                <option value="2">Senior</option>
              </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingSelect" label="Size" >
              <Form.Select aria-label="Floating label select example" onChange={handleChange('pet_size')}>
                <option> </option>
                <option value="0">X-Small</option>
                <option value="1">Small</option>
                <option value="2">Medium</option>
                <option value="3">Large</option>
                <option value="4">X-Large</option>
                <option value="5">XX-Large</option>
              </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingSelect" label="Sex" >
              <Form.Select aria-label="Floating label select example" onChange={handleChange('sex')}>
                <option> </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingTextarea" label="Other information" className="mb-3">
                <Form.Control as="textarea" onChange={handleChange('other_info')}placeholder="Other information" />
              </FloatingLabel>



        </Form> :

        <Form>

            <FloatingLabel controlId="floatingTextarea" label={`What's your ${values.pet_type}'s name?`} className="mb-3">
              <Form.Control as="textarea" onChange={handleChange('pet_name')}placeholder="pet name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Pet name">
            </FloatingLabel>


              <FloatingLabel controlId="floatingTextarea" label="Coat color" className="mb-3">
                <Form.Control as="textarea" onChange={handleChange('coat_color')}placeholder="Coat color" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Coat color">
              </FloatingLabel>

              <FloatingLabel controlId="floatingSelect" label="Age" >
              <Form.Select aria-label="Floating label select example" onChange={handleChange('age')}>
                <option> </option>
                <option value="0">Kitten</option>
                <option value="1">Adult</option>
                <option value="2">Senior</option>
              </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingSelect" label="Eye color" >
              <Form.Select aria-label="Floating label select example" onChange={handleChange('eye_color')}>
                <option> </option>
                <option value="yellow and amber">Yellow and Amber</option>
                <option value="hazel">Hazel</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
                <option value="copper">Copper</option>
                <option value="heterochromia iridium">Heterochromia iridiuma</option>
                <option value="dichroic">Dichroic</option>
              </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingSelect" label="Size" >
              <Form.Select aria-label="Floating label select example" onChange={handleChange('pet_size')}>
                <option> </option>
                <option value="0">Very Thin</option>
                <option value="1">Thin</option>
                <option value="2">Ideal</option>
                <option value="3">Overweight</option>
                <option value="4">Obese</option>
              </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingSelect" label="Sex" >
              <Form.Select aria-label="Floating label select example" onChange={handleChange('sex')}>
                <option> </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingTextarea" label="Other information" className="mb-3">
                <Form.Control as="textarea" onChange={handleChange('other_info')} placeholder="Other information" />
              </FloatingLabel>


        </Form>


        }

        <Button className='m-2' variant="outline-dark" size="sm" onClick={prevStep}>Previous</Button>
        <Button className='m-2' variant="outline-dark" size="sm" onClick={nextStep}>Next</Button>


        </Container>

    )
}

export default PetAttributes
