import React, { useRef} from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
//firebase
import { auth } from '../../firebase'
function SignUp() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const signUp = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value

        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    return (

        <div className='signUp'>
            <div className='signUp__container'>
                <form className='signUp__form' action='' >
                    <input ref={emailRef} type='email' placeholder='Email'></input>
                    <input ref={passwordRef} type='password' placeholder='Password'></input>
                    <div className='signUp__submission'>
                        <button className='btn btn-primary' onClick={signUp} >SignUp</button>
                        <Link to='/'><p>Back to home</p></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
