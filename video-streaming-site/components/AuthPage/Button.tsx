import {useFormStatus} from 'react-dom'
import { Button } from '@mui/material'

export default function ButtonField({children}:{children:string}) {
    const { pending} = useFormStatus();
  return (
    <Button type='submit' variant="contained" >{pending ? 'Please wait' : children}</Button>
  )
}
