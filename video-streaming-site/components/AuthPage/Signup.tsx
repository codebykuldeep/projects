'use client'
import { Button } from '@mui/material'
import classes from './auth-page.module.css'
import InpField from './InpField'
import Link from 'next/link'
import { signUpAction } from '@/utils/auth-methods'
import { useActionState } from 'react'
import ButtonField from './Button'

export default function Signup() {
  const [state,formAction] =useActionState(signUpAction,'')

  return (
    <div className={classes.box}>
          <h2>Sign Up</h2>
          <form action={formAction} className={classes.form}>
            <div>
                <InpField title="Name" type="text" place="Enter your name"/>
            </div>
            <div>
                <InpField title="Email" type="text" place="Enter your Email"/>
            </div>
            <div>
                <InpField title="Password" type="password" place="Enter your Password"/>
            </div>
            <div className={classes.error}>
              {state && <p>{state}</p>}
            </div>
            <div className={classes.btn}>
              <ButtonField>Sign Up</ButtonField>
            </div>
          </form>
          <div>If you are registered user ,<Link href={'/auth'}><span className={classes.submit}>Click Here</span></Link></div>
        </div>
  )
}
