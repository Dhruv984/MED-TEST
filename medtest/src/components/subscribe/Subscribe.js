import React from 'react'
import './Subscribe.css'

function Subscribe() {
    return (
        <div className='subscribe'>
            <h1>Join Our Newsletter</h1>
            <h2>Enter your email here</h2>
            <div className='subscribe__email'>
                <input type='email'></input>
                <button className='btn btn-primary' type='submit'>Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe
