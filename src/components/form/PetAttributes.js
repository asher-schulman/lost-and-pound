import React from 'react'
import {Form, FloatingLabel} from 'react-bootstrap'

const PetAttributes = ({nextStep, prevStep, handleChange, values}) => {
    return (
        <div>
        {values.pet_type === "dog" ?
        <Form>

            <Form.Group onChange={handleChange('pet_name')} className="mb-3">
            <Form.Label>What's your {values.pet_type}'s name?</Form.Label>
            <Form.Control/>
            <Form.Text className="text-muted">
            we're here to help
            </Form.Text>
            </Form.Group>



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
              <FloatingLabel controlId="floatingTextarea2" label="Other information">
              </FloatingLabel>


        </Form> :

        <Form>

            <Form.Group onChange={handleChange('pet_name')} className="mb-3">
            <Form.Label>What's your {values.pet_type}'s name?</Form.Label>
            <Form.Control/>
            <Form.Text className="text-muted">
            we're here to help
            </Form.Text>
            </Form.Group>



              <FloatingLabel controlId="floatingTextarea" label="Coat color" className="mb-3">
                <Form.Control as="textarea" onChange={handleChange('coat_color')}placeholder="Coat color" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Coat color">
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
                <Form.Control as="textarea" onChange={handleChange('other_info')}placeholder="Other information" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Other information">
              </FloatingLabel>

        </Form>


        }

        <div>
        <button className='circleButton m-2' variant="outline-dark" size="sm" onClick={prevStep}>Previous</button>
        <button className='circleButton m-2' variant="outline-dark" size="sm" onClick={nextStep}>Next</button>
        </div>

        </div>

    )
}

export default PetAttributes
