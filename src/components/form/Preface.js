import React from 'react'
import {Form, Container, Button} from 'react-bootstrap'

const Preface = ({nextStep}) => {

    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (
        <div>
            <h1>PREFACE</h1>
            <h2>We've got your back with neighbors and fellow pet lovers who can help out.</h2>

            <Button onClick={Continue} className='circleButton m-2' variant="outline-dark" size="lg">Continue</Button>
        </div>
    )
}


export default Preface
