import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
              <h1>MISSIONED STORE</h1>
              <h2>The one stop shop for all students of India</h2>
              <h2>Trusted by 2500+ students</h2>
              <div className='buttons'>
                 <button className='btn btn-primary'>Start Shopping</button>
                 <button className='btn btn-secondary'>MissionEd PRO</button>
              </div>

            </div>
                <img src='	https://www.missioned.in/MissionEd_Store_New/assets/img/hero-img.png' alt=''></img>
        </div>
    )
}

export default Header
