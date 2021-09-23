import React from 'react'

const PetPic = ({nextStep, prevStep, handleChange, values}) => {
    return (
        <div>
            <h1>Please upload a clear photo of your {values.pet_type} {values.pet_name}</h1>
            
        </div>
    )
}

export default PetPic
