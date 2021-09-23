import React from 'react'
import {Button} from 'react-bootstrap'

const Preface = ({nextStep}) => {

    return (
        <div>
            <h1>PREFACE</h1>
            <h2>We've got your back with neighbors and fellow pet lovers who can help out.</h2>

            
            <Button className='m-2' variant="outline-dark" size="sm" onClick={nextStep}>Next</Button>
        </div>
    )
}


export default Preface
