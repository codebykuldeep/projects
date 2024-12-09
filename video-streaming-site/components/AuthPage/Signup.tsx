import { Button } from '@mui/material'
import classes from './auth-page.module.css'
import InpField from './InpField'
import Link from 'next/link'

export default function Signup() {
  return (
    <div className={classes.box}>
          <h2>Sign In</h2>
          <form action="" className={classes.form}>
            <div>
                <InpField title="Name" type="text" place="Enter your name"/>
            </div>
            <div>
                <InpField title="Email" type="text" place="Enter your Email"/>
            </div>
            <div>
                <InpField title="Password" type="password" place="Enter your Password"/>
            </div>
            <div className={classes.btn}>
              <Button variant="contained" >Login</Button>
            </div>
          </form>
          <div>If you are registered user ,<Link href={'/auth'}><span className={classes.submit}>Click Here</span></Link></div>
        </div>
  )
}
