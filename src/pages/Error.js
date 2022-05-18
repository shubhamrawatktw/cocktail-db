import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
    <div className="error-container">
      <h3>oops! it's a dead end</h3>
      <Link to="/" className='btn btn-primary'>
        back Home
      </Link>

    </div>
    </section>
  )
}

export default Error
