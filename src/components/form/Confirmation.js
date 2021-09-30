import React from 'react'
import {Container, Button} from 'react-bootstrap'

const Confirmation = ({nextStep, prevStep, handleChange, values}) => {
    const date = new Date(values.date_lost)
    let dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    return (
        <Container>
            <h1>Please insure the information below is correct</h1>
            <ul>
                <li> Name: {values.pet_name} </li>
                <li> {values.pet_type} </li>
                <li><img alt="lost pet" src={values.picture_url}></img>
                </li>
                <li> Zip code: {values.zip_code} </li>
                <li> Coat color: {values.coat_color} </li>
                <li> Eye color: {values.eye_color} </li>
                <li> Sex: {values.sex} </li>
                <li> Size {values.pet_size} </li>
                <li> Age: {values.age} </li>
                <li> Misc: {values.other_info} </li>
                <li> Date Lost: {dateString} </li>
                <li> Contact Email:  {values.email} </li>
                <li> Contact Phone Number: {values.phone_number} </li>

            </ul>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={prevStep}>Previous</Button>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={nextStep}>Next</Button>
        </Container>
    )
}

export default Confirmation
