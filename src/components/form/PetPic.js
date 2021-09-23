import {React} from 'react'
import {Form, Container, Button} from 'react-bootstrap'
// import {axios} from 'axios'


const PetPic = ({nextStep, prevStep, handleChange, values}) => {
    // const [url, setUrl] = useState()
    // const [file, setFile] = useState()
    const updateFile = (event) => {
            event.preventDefault();
            // setFile(event.target.files[0])
            console.log(event.target.files[0]);
        // post(file).then((response) => {
        //     imagelink = response["link"]
        // })
        // axios.post(`https://api.cloudinary.com/v1_1/${env.process.REACT_APP_CLOUDNAME}/upload`, {
        //     file: event.target.files[0],
        //     upload_preset: "glu12mqe",
        //
        // })
    }




    return (
        <Container>
            <h1>Please upload a clear photo of your {values.pet_type} {values.pet_name}</h1>
            <Form>
                <Form.Group onChange={updateFile} controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" />
                </Form.Group>

            </Form>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={prevStep}>Previous</Button>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={nextStep}>Next</Button>
        </Container>
    )
}

export default PetPic
