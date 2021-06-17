import React from 'react'
import './Navbar.css'



function Navbar() {
    return (
        <div className='navbar__wrapper'>
            <a href='/' className='navbar__name'>MissonEd Store</a>
            <div className='navbar__menu'>
                <div>Login</div>
            </div>
        </div>
    )
}

export default Navbar
