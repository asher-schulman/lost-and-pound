import {React, useState} from 'react'
import {Container, Button} from 'react-bootstrap'
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
        <>
        <Container>
            <h1>Lost Date and Time</h1>
            <p>What day was {values.pet_name} lost?</p>



            <label for="party">Enter a date and time for your party booking:</label>
            <input id="party" type="datetime-local" name="partydate" value="2017-06-01T08:30"/>


            <Button className='m-2' variant="outline-dark" size="sm" onClick={prevStep}>Previous</Button>
            <Button className='m-2' variant="outline-dark" size="sm" onClick={nextStep}>Next</Button>
        </Container>
        </>
    )
}

export default LostWhenWhere
