import React,{useState} from 'react'
import './Subscribe.css'
//firebase
import db from '../../firebase';
//mui
import { Input } from '@material-ui/core';
function Subscribe() {
    const [input,setInput]=useState('');
    const handleInput=(e)=>{
        setInput(e.target.value)
    }
    const subscribers=async()=>{
        if(!input){
            console.log('empty')
        }
        else{
        await db.collection('subscribers').add({
            email:input
        }).catch(err=>{
            console.log(err)
        })
    }
    }
    return (
        <div className='subscribe'>
            <h1>Join Our Newsletter</h1>
            <h2>Enter your email here</h2>
            <div className='subscribe__email'>
                <Input type='email' value={input} onChange={handleInput}></Input>
                <button className='btn btn-primary' type='submit' onClick={subscribers}>Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe
