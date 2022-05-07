import { Box, Grid } from '@mui/material'
import React from 'react'
import { GifGridCard } from './GifGridCard';

export const GifGrid = () => {
  const gifs = [
    {
      url: 'https://bit.ly/dan-abramov',
      title: 'Imagen de prueba'
    }
  ]

  return (
    <>
      <Box sx={{ flexGrow: 1, width: '80%', marginLeft: 'auto', marginRight:'auto' }} >
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {
          gifs.map((gif,position)=>(<Grid key={position} item xs={6} sm={4} md={3} >
            <GifGridCard {...gif} />
          </Grid>
          )) 
          }
        </Grid>
      </Box>
    </>
  )
}
