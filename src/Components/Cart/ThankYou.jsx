import React from 'react'
import { Link } from 'react-router-dom'

function ThankYou() {
  return (
    <div className='container'>
        <div className="row">
        <h1 className='col-6-md'>Thank You For Your Purchase</h1>
        <Link to='/'>Continue Shopping</Link>
        </div>
    </div>
  )
}

export default ThankYou