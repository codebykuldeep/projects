'use client'
import InpField from './InpField'
import classes from './auth-page.module.css'
import { Button } from '@mui/material'
import Link from 'next/link'
import ButtonField from './Button'
import { loginAction } from '@/utils/auth-methods'
import { useActionState, useState } from 'react'

const initialErrorState:ErrorStateType={
  email:{
      status:true,
      message:'This field is required',
  },
  password:{
      status:true,
      message:'This field is required',
  },
 
}

export default function Login() {
  const [state,formAction] =useActionState(loginAction,'')
  const [errorState,setErrorState] = useState<ErrorStateType>(initialErrorState);


  
  return (
    <div className={classes.box}>
          <h2>Sign In</h2>
          <form action={formAction} className={classes.form}>
            <div>
                <InpField title="Email" type="text" place="Enter your Email" errorState={errorState}  setErrorState={setErrorState}/>
            </div>
            <div>
                <InpField title="Password" type="password" place="Enter your Password" errorState={errorState} setErrorState={setErrorState}/>
            </div>
            <div className={classes.error}>
              {state && <p>{state}</p>}
            </div>
            <div className={classes.btn}>
              <ButtonField>Login</ButtonField>
            </div>
          </form>
          <div>If you are new user ,<Link href={'/auth?mode=signup'}><span className={classes.submit}>Click Here</span></Link></div>
        </div>
  )
}
