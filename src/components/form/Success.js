import React from 'react'
import {Form, FloatingLabel, Container, Button} from 'react-bootstrap'
const Success = ({nextStep, prevStep, handleChange, values, renderFalse}) => {
    // <img src="https://i.imgur.com/yQLDyiR.jpg"></img>
    const postToAPI = () => {
        renderFalse();
    }

    return (
        <div>
            <p>Your listing is published! We hope your pet is home soon.
            </p>
            <p>Take a screenshot of your listing to easily share on social media.</p>
            <p>{values.pet_name} is a {values.pet_size}
            {values.sex}
                {values.pet_type}
            </p>
            <Button onClick={nextStep}>Confirm</Button>
        </div>
    )
}

export default Success
