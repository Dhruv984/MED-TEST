import React from 'react'
import './Feedback.css'
function Feedback() {
    return (
        <div className='feedback'>
            <h1>Feedback</h1>
            <h2>Your feedback is valuable to us !</h2>
            <form className='feedback__form'>
                <div>
                <input className='feedback__name' placeholder='Your Name' type='text'></input>
                <input className='feedback__email' placeholder='Your Email' type='email'></input>
                </div>
                <input className='feedback__subject' placeholder='Subject'   type='text'></input>
                <textarea className='feedback__message' placeholder='Message' ></textarea>
            </form>
            <button className='btn btn-primary center' type='submit'>Send Feedback</button>
        </div>
    )
}

export default Feedback
