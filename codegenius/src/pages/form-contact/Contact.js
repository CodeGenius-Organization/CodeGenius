import React from 'react'
import './Contact.css'
import FormContact from './FormContact'
import ContactImg from '../../img/contactUs.svg'

function Contact() {
    return (
        <div className='contact-container'>
            <FormContact />
            d<div><img src={ContactImg} alt=''></img></div>
        </div>
    )
}

export default Contact