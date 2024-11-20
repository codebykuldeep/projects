import React from 'react'

function FieldError({error}) {
  return (
    <div className='error-msg'>{error}</div>
  )
}

export default FieldError