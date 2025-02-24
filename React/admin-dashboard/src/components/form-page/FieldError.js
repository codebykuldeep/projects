import React from 'react'

function FieldError({validationState,field}) {
  const status = validationState[field].status;
  const error = validationState[field].error;
  return (
    <>
    {status ? <div className='error-msg'>{error}</div> : <></>}
    </>
  )
}

export default FieldError