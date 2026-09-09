import React from 'react'
import {MdEmail} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"

function Footer() {
  return (
    <div style={{height:'400px',backgroundColor:'black'}} className='d-flex align-items-center justify-content-center text-light'>
<div className='text-center'>
  <h3>Contact us</h3>
  <h5><MdEmail/>resumebuilder@gmail.com</h5>
  <h5><FaPhoneAlt/>7865393210</h5>
  <h3>Connect with us</h3>
  <p>Designed & built with react</p>
</div>

    </div>

  )
}

export default Footer