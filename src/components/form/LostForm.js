import React, { Component } from 'react'
import PetType from './PetType'
import PetNamePic from './PetNamePic'
import PetZip from './PetZip'
import PetTraits from './PetTraits'
import LostDate from './LostDate'
import ContactInfo from './ContactInfo'
import Confirmation from './Confirmation'
import Success from './Success'

export default class LostForm extends Component {

    state = {
        step: 1,
        pet_type: '',
        pet_name: '',
        picture_url: '',
        zip_code: '',
        coat_color: '',
        eye_color: '',
        sex: '',
        pet_size: '',
        other_info: '',
        date_lost: '',
        time_lost: '',
        email: '',
        phone_number: '',
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1});
    }
    // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    
    render() {

        const { step } = this.state;
        const { pet_type, pet_name, picture_url, zip_code, coat_color, eye_color, sex, pet_size, other_info, date_lost, time_lost, email, phone_number } = this.state
        const values = { pet_type, pet_name, picture_url, zip_code, coat_color, eye_color, sex, pet_size, other_info, date_lost, time_lost, email, phone_number }

        switch(step) {
            case 1:
                return (
                    <PetType
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 2:
                return (
                    <PetNamePic
                        prevStep={ this.prevStep }
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 3:
                return (
                    <PetZip
                        prevStep={ this.prevStep }
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 4:
                return (
                    <PetTraits
                        prevStep={ this.prevStep }
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 5:
                return (
                    <LostDate
                        prevStep={ this.prevStep }
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 6:
                return (
                    <ContactInfo
                        prevStep={ this.prevStep }
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 7:
                return (
                    <Confirmation
                        prevStep={ this.prevStep }
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 8:
                return (
                    <Success
                        prevStep={ this.prevStep }
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
        }

        return (
            <div>
                <h1>Parent Lost Form</h1>
            </div>
        )
    }
}
