import { Button } from '@mui/material'
import { useFormStatus } from 'react-dom'


export default function UploadButton({children}:{children:string}) {
    const {pending } =useFormStatus()
    
  return (
    <Button type="submit" variant="contained">{pending ? 'Uploading....' :children}</Button>
  )
}
