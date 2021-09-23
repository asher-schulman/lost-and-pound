import React, { Component } from 'react'
import Preface from './Preface'
import PetType from './PetType'
import PetPic from './PetPic'
import PetAttributes from './PetAttributes'
import LostWhenWhere from './LostWhenWhere'
import ContactInfo from './ContactInfo'
import Confirmation from './Confirmation'
import Success from './Success'
import SearchBar from '../SearchBar'
import PetCard from '../PetCard'

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
        age: '',
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
        this.setState({
            [input]: e.target.value
        })
    }


    render() {

        const { step } = this.state;
        const { pet_type, pet_name, picture_url, zip_code, coat_color, eye_color, sex, pet_size, age, other_info, date_lost, time_lost, email, phone_number } = this.state
        const values = { pet_type, pet_name, picture_url, zip_code, coat_color, eye_color, sex, pet_size, age, other_info, date_lost, time_lost, email, phone_number }

        switch(step) {
            case 1:
                return (
                    <Preface
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 2:
                return (
                    <PetType
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 3:
                return (
                    <PetAttributes
                        prevStep={ this.prevStep }
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 4:
                return (
                    <PetPic
                        prevStep={ this.prevStep }
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )

            case 5:
                return (
                    <LostWhenWhere
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
                        values={ values }
                    />
                )
            case 8:
                return (
                    <Success
                    nextStep={ this.nextStep }
                    values={ values }
                    renderFalse = {this.renderFalse}
                    />
                )
            case 9:
                return (
                    <>
                    <SearchBar/>
                    <PetCard/>
                    </>
                )
        }

        return (
            <div>
                <h1>Parent Lost Form</h1>
            </div>
        )
    }
}
