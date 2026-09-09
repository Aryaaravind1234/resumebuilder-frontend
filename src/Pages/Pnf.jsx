import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div style={{height:'600px',marginTop:'50px'}} className='d-flex align-items-center justify-content-center flex-column'>
      <img src="https://i.pinimg.com/originals/79/b3/03/79b30352d4a90ff977bb0eeb5ecfddc5.gif" alt=""  width={300}/>
      <h5>Sorry,we could't find the page </h5>
      <Link to={'/'} className='btn btn-dark mt-4nnec'>Back to Home </Link>
      
    </div>
  )
}

export default Pnf