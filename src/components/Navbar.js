import { Box, IconButton } from '@mui/material'
import React from 'react'
import { LogoGifApp } from './LogoGifApp'
import {FaGithub } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <Box
      sx={{
          width: 'auto',
          height: 70,
          display:'flex',
          alignItems: 'center'
        }}
    >
        <LogoGifApp />
        <IconButton 
        color='primary' 
        aria-label='repositorio github' 
        size="large" 
        sx={{display:'block', marginLeft:'auto'}}>
            <FaGithub />
        </IconButton>
    </Box>
  )
}
