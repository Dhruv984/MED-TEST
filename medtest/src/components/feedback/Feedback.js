import React from 'react'
import { useForm } from 'react-hook-form'
import './Feedback.css'
//firebase
import db from '../../firebase'
function Feedback() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmission = async (data) => {
        await db.collection('feedback').add({
            Name:data.name,
            Email: data.email,
            Subject:data.subject,
            Message:data.message
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className='feedback'>
            <h1>Feedback</h1>
            <h2>Your feedback is valuable to us !</h2>
            <form className='feedback__form' onSubmit={handleSubmit(onSubmission)}>
                <div>
                <input className='feedback__name' placeholder='Your Name' type='text' name='name' {...register('name', { required:'*Required Field'})} />
                 <span>{errors?.name?.message}</span>
                <input className='feedback__email' placeholder='Your Email' type='email' name='email' {...register("email", { required:'*Required Field'})} />
                <span>{errors?.email?.message}</span>
                </div>
                <input className='feedback__subject' placeholder='Subject'   type='text' name='subject' {...register("subject", { required:'*Required Field'})} />
                 <span>{errors?.subject?.message}</span>
                <textarea className='feedback__message' placeholder='Message' type='text' name='message'{...register('message')}></textarea>
                <button className='btn btn-primary center' type='submit'>Send Feedback</button>
            </form>
            
        </div>
    )
}

export default Feedback
