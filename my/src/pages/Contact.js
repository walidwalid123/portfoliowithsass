import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
            <div className='contact'>
                <h1>Kontakt Information </h1>
                <h3>Adress:</h3>
                <p>Rådhusgata 91A Östersun</p>
                <h3>Telefonnummer:</h3>
                <p>073-0336922</p>
                <h3>Email:</h3>
                <a href="walid_walid123@hotmail.fr">
                    <p>walid_walid123@hotmail.fr</p>
                </a>
            </div>
            </div>
        )
    }
}

export default Contact
