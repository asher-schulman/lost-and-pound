import {React, useState} from 'react'
import {Form, Container, Button} from 'react-bootstrap'

const PetPic = ({nextStep, prevStep, handleChange, values, updateImageLink}) => {

    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", process.env.REACT_APP_PRESET_NAME)
        data.append("cloud_name", process.env.REACT_APP_CLOUDNAME)
        fetch(" https://api.cloudinary.com/v1_1/cavellerson/image/upload",{
        method:"post",
        body: data
        })
        .then(resp => resp.json())
        .then(data => {
        setUrl(data.url)

        })
        .catch(err => console.log(err))

        updateImageLink(url)

        }








    return (
        <>
            <h1>Please upload a clear photo of your {values.pet_type} {values.pet_name}</h1>

            <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
            <button value={url} onClick={uploadImage}>Upload</button>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={prevStep}>Previous</Button>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={nextStep}>Next</Button>

            <img src={url}/>
        </>
    )
}

export default PetPic
