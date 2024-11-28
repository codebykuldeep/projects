import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import LoginPage from './LoginPage';
import SignUp from './SignUp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height:600,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

export default function AuthForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <ModalBox open={open} handleClose={handleClose} />
    </div>
  );
}

interface ModalBoxProps{
    open:boolean;
    handleClose:()=>void;
}

function ModalBox({open,handleClose}:ModalBoxProps){
    const [switchAuth,setSwitchAuth] = useState(false);

    function toggleAuth(){
        setSwitchAuth(prev => !prev);
    }
    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!switchAuth ? <LoginPage/> : <SignUp/>}
        </Box>
      </Modal>
    )
}
