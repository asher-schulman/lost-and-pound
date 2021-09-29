import React from 'react'
import {Container, Button} from 'react-bootstrap'

const Confirmation = ({nextStep, prevStep, handleChange, values}) => {

    const dogSizes = {
        0: "X-Small",
        1: "Small",
        2: "Medium",
        3: "Large",
        4: "X-Large",
        5: "XX-Large"
    }

    const catSizes = {
        0: "Very Thin",
        1: "Thin",
        2: "Ideal",
        3: "Overweight",
        4: "Obese"
    }

    const dogAges = {
        0: "Puppy",
        1: "Adult",
        2: "Senior"
    }

    const catAges = {
        0: "Kitten",
        1: "Adult",
        2: "Senior"
    }


    let petInfo= {
        age: '',
        size: ''
    }


    if (values["pet_type"] === "dog") {
        petInfo["age"] = dogAges[parseInt(values["age"])]
        petInfo["size"] = dogSizes[parseInt(values["pet_size"])]
    } else if (values["pet_type"] === "cat"){
        petInfo["age"] = catAges[parseInt(values["age"])]
        petInfo["size"] = catSizes[parseInt(values["pet_size"])]
    } else {

    }




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
                <li> Size: {petInfo.size}</li>
                <li> Age: {petInfo.age} </li>
                <li> Misc: {values.other_info} </li>
                <li> Date Lost: {values.date_lost} </li>
                <li> Time Lost: {values.time_lost} </li>
                <li> Contact Email:  {values.email} </li>
                <li> Contact Phone Number: {values.phone_number} </li>

            </ul>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={prevStep}>Previous</Button>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={nextStep}>Next</Button>
        </Container>
    )
}

export default Confirmation
