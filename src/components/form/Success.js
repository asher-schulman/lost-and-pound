import {React, useState} from 'react'
import {Button} from 'react-bootstrap'
const Success = ({nextStep, prevStep, handleChange, values, renderFalse}) => {

    const dogSizes = {
        0: "X-Small",
        1: "small",
        2: "medium",
        3: "large",
        4: "X-Large",
        5: "XX-Large"
    }

    const catSizes = {
        0: "very Thin",
        1: "thin",
        2: "ideal",
        3: "overweight",
        4: "obese"
    }

    const dogAges = {
        0: "puppy",
        1: "adult",
        2: "senior"
    }

    const catAges = {
        0: "kitten",
        1: "adult",
        2: "senior"
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

    // const [dateString, setDateString] = useState(values.date_lost)
    //
    //
    // values.date_lost.toString();
    // setDateString()

    return (
        <div>
            <p>Your listing is published! We hope your pet is home soon.
            </p>
            <p>Take a screenshot of your listing to easily share on social media.</p>
            <p>{values.pet_name} is a {petInfo.size} {values.sex === "M" ? <span>male</span> : <span> female </span> } {petInfo.age === "Puppy" || "Kitten" ? <span> {petInfo.age} </span> : <span>{petInfo.age} {values.pet_type}</span>}. {values.sex === "M" ? <span> He </span> : <span> She </span>} was lost at around 
            </p>
            <Button onClick={nextStep}>See Listings</Button>
        </div>
    )
}

export default Success
