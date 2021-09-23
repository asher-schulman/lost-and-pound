import {React, useState} from 'react'
import {Form, FloatingLabel, Container, Button} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LostWhenWhere = ({nextStep, prevStep, handleChange, values}) => {
    const [startDate, setStartDate] = useState(new Date());

    const show = (event) => {
        return event
    }
    const someFunction = (date) => {
        setStartDate(date)
        handleChange('date_lost')
    }

    return (
        <Container>
            <h1>Lost Date and Time</h1>
            <p>What day was {values.pet_name} lost?</p>

            <DatePicker selected={startDate} value={startDate} onSelect={show} onChange={(date) => someFunction(date)} />

            <Button className='m-2' variant="outline-dark" size="sm" onClick={prevStep}>Previous</Button>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={nextStep}>Next</Button>
        </Container>
    )
}

export default LostWhenWhere
