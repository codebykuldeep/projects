import React from 'react'
import './errorPage.css'

function ErrorPage() {
  return (
    <div className='error-page'>
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <p>Please recheck your url or go back to home page.</p>
        </div>
    </div>
  )
}

export default ErrorPage