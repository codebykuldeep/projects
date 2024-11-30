import React, { useEffect, useState } from "react";
import AuthForm from "./AuthForm";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userState";
import { UserDataType } from "./userPageTypes";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';




function UserState() {
    const userLoggedIn = useSelector((state:RootState)=>state.user.userLoggedIn);
    const userDetails = useSelector((state:RootState)=>state.user.userDetails);
    const dispatch = useDispatch<AppDispatch>();
    //const travelList = useSelector((state:RootState)=>state.list.travelList);
    async function handleSignOut(){
        console.log('logout');
        
        await signOut(auth).then((data)=>console.log(data));
        dispatch(userActions.removeUser());
    }
    
    
    onAuthStateChanged(auth,(user)=>{
      if(user){
        dispatch(userActions.setUserState(true));
      }
    })
    useEffect(()=>{
      let userData:User ;
      if(auth.currentUser){
        userData =auth.currentUser;
        
        
        const displayName = userData.displayName;
        
        const email = userData.email;
        const uid= userData.uid;
        const accessToken =userData.providerId;

        const data:UserDataType ={
            accessToken:accessToken,
            displayName:displayName || 'User',
            email:email || '',
            uid
          }
          
          
        dispatch(userActions.setUserDetails(data));
      }
    },[userLoggedIn,dispatch])
   
    
    

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
  if (userLoggedIn) {
    return (
      <>
        <div>
      <Button
        id="fade-button"
        onClick={handleClick}
      >
        Hello ,{userDetails.displayName}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
    </div>
      </>
    );
  }
  return (
    <>
      <AuthForm />
    </>
  );
}

export default UserState;


export function convertUserData(user:UserDataType){
  return {
    displayName:user.displayName,
    email:user.displayName,
    uid:user.uid,
    accessToken:user.accessToken,
  }
}
