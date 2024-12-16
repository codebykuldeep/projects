import { Button } from '@mui/material'
import { useFormStatus } from 'react-dom'
interface uploadButtonProps{
  children:string;
  disabled:boolean;
  isPending:boolean;
  onClick:()=>void
}

export default function UploadButton({children,disabled,isPending,onClick}:uploadButtonProps) {
    const {pending } =useFormStatus()
    
  return (
    <Button onClick={onClick} type={disabled ? "button" :"submit"} disabled={isPending}  variant="contained">{pending ? 'Uploading....' :children}</Button>
  )
}
