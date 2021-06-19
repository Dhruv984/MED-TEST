import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './Subscribe.css'
//firebase
import db from '../../firebase'

function Subscribe() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {

        await db.collection('subscribers').add({
            email: data.email
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className='subscribe'>
            <h1>Join Our Newsletter</h1>
            <h2>Enter your email here</h2>
            <form className='subscribe__email' onSubmit={handleSubmit(onSubmit)}>
                <input type='email' name='email' {...register('email', { required: 'email is required' })} />
                   
                <button id='button' className='btn btn-primary' type="submit">Submit</button>
                
            </form>
            <span>{errors?.email?.message}</span>


        </div>
    )
}

export default Subscribe
