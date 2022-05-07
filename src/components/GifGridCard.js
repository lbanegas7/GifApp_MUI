import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import React from 'react'

export const GifGridCard = ({ url, title }) => {

  return (
    <>
      <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
          component='img'
          height='180'
          image={url}
          alt='gif'
        />
        <CardContent>
          <Typography gutterBottom variant='h7' component='div' sx={{ textAlign: 'center', textTransform: 'Uppercase' }}>
            {title} 
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

GifGridCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
