import React, { useRef } from 'react'
import { Link,useHistory} from 'react-router-dom'
import './Authentication.css'
//firebase
import { auth } from '../../firebase'

function Authentication() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const history=useHistory()
   

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
            history.replace('/user')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='authentication'>
            <div className='authentication__signIn'>
                <form className='signIn__form' action='' >
                <input ref={emailRef} type='email' placeholder='Email'></input>
                    <input ref={passwordRef} type='password' placeholder='Password'></input>
                    {/* <input ref={emailRef}  placeholder='Your Email' type='email' name='email' {...register("email", { required:'*Required Field'})} />
                     <span className='error'>{errors?.email?.message}</span>
                    <input ref={passwordRef} placeholder='Password' type='password' name='password' {...register("password", { required:'*Required Field'})} />
                     <span className='error'>{errors?.password?.message}</span> */}
                    <div className='authentication__submission'>
                        <button className='btn btn-primary' type='submit' onClick={signIn} >SignIn</button>
                        <p>Not Registerd? <Link to='/signUp'><span className='signUp__span'>SignUp</span></Link></p>
                        <Link to='/'><p>Back to home</p></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Authentication
