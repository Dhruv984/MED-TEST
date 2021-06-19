import React from 'react'
import './Social.css'
function Social() {
    return (
        <div className='social'>
            <div className='social__firstSection social__content'>
                <h2>MissionED</h2>
                <p>Affiliated with Atal Incubation Center
                Goa Institute of Management
                India
                </p>
            </div>
            <div className='social__secondSection social__content'>
                <h2>Useful Links</h2>
                <li>Home</li>
                <li>About us</li>
                <li>Careers</li>
                <li>Services</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
            </div>
            <div className='social__thirdSection social__content'>
                <h2>Our Services</h2>
                <li>MissionEd Store</li>
                <li>MissionEd Classes</li>
                <li>MissionEd Classes (School)</li>
                <li>MissionEd Referral</li>
                <li>MissionEd Pro</li>
            </div>
            <div className='social__fourthSection social__content'>
                <h2>Our Social Networks</h2>
                <p>Reach out to us anytime!</p>
            </div>
        </div>
    )
}

export default Social
