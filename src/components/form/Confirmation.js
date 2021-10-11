import React from 'react'
import {Container, Button} from 'react-bootstrap'
import axios from 'axios'
const Confirmation = ({nextStep, prevStep, handleChange, values}) => {
    const date = new Date(values.date_lost)
    let dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`

    const postToAPI = () => {
        let postData = {
            pet_type: values.pet_type,
            pet_name: values.pet_name,
            zip_code: parseInt(values.zip_code),
            coat_color: values.coat_color,
            eye_color: values.eye_color,
            sex: values.sex,
            misc: values.other_info,
            picture_url: values.picture_url,
            date_lost: values.date_lost,
            pet_size: values.pet_size,
            age: parseInt(values.age),
            phone_number: values.phone_number,
            email: values.email
        }
        axios.post('https://lostandpoundapi.herokuapp.com/posts', postData).then((response) => {
            console.log(response);
            alert('')
        }).catch((error) => {
            console.log(error);
        })
        console.log(postData);
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
                <li> Date Lost: {dateString} </li>
                <li> Contact Email:  {values.email} </li>
                <li> Contact Phone Number: {values.phone_number} </li>

            </ul>
            <Button onClick={postToAPI}>Show data</Button>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={prevStep}>Previous</Button>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={nextStep}>Next</Button>
        </Container>
    )
}

export default Confirmation
