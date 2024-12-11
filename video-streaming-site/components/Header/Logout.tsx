'use client';
import { Box } from '@mui/material'
import { signOut } from 'next-auth/react';
import { revalidatePath } from 'next/cache';
import { redirect, usePathname } from 'next/navigation';
import React from 'react'


export default function Logout() {
    const pathname = usePathname()
    
    
    function handleLogout(){
        const data = signOut({redirect:false});
        if(pathname.includes('/user')){
          revalidatePath('/');
            redirect('/home');
        }
    }
  return (
    <Box onClick={handleLogout}>Logout</Box>
  )
}
