import {React, useState} from 'react'
import {Form, Container, Button} from 'react-bootstrap'

const PetPic = ({nextStep, prevStep, handleChange, values, updateImageLink}) => {

    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const uploadImage = (event) => {
        event.preventDefault();
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


        }

        const changeState = () => {
            nextStep();
            updateImageLink(url);
        }





    return (
        <>
            <h1>Please upload a clear photo of your {values.pet_type} {values.pet_name}</h1>

            <form>
            <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
            <button type="submit" value={url} onClick={uploadImage}>Upload</button>
            </form>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={prevStep}>Previous</Button>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={changeState}>Next</Button>

            
        </>
    )
}

export default PetPic
