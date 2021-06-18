import React from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import './Navbar.css'
// firebase
import { auth } from '../../firebase'



function Navbar({user}) {
    const history=useHistory()
    const signOut=async()=>{
                await auth.signOut()
                history.replace('/')
                
            }
    return (
        <div className='navbar__wrapper'>
            <a href='/' className='navbar__name'>MissonEd Store</a>

            {
                !user?<Link to='/signIn'><button className='btn btn-secondary'>SignIn</button></Link> 
                :<button onClick={signOut} className='btn btn-secondary'>SignOut</button>
            }
        </div>
    )
}

export default Navbar
