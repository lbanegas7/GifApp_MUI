import { Box, Grid } from '@mui/material'
import React from 'react'
import { GifGridCard } from './GifGridCard';
import { useFetchGifs } from '../hooks/useFetchGifs'
import CircularProgress from '@mui/material/CircularProgress';

export const GifGrid = ({ valueSearch }) => {

  const { data, loading } = useFetchGifs(valueSearch)
  console.log(data,loading);
  // const gifs = [
  //   {
  //     url: 'https://bit.ly/dan-abramov',
  //     title: 'Imagen de prueba'
  //   }
  // ]

  const progress = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
      <CircularProgress />
    </Box>
  )
  return (
    <>
      { 
      loading ? progress() : (<Box sx={{ flexGrow: 1, width: '80%', marginLeft: 'auto', marginRight: 'auto', mb: 5}} >
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {
            data.map((gif, position) => (<Grid key={position} item xs={6} sm={4} md={3} >
              <GifGridCard {...gif} />
            </Grid>
            ))
          }
        </Grid>
      </Box>)
      }
    </>
  )
}
