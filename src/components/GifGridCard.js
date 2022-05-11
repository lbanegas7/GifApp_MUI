import { Card, CardContent, CardMedia, Grow, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import React from 'react'

export const GifGridCard = ({ url, title }) => {

  return (
    <>
    <Grow in={true}>
  
      <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
          component='img'
          height='180'
          image={url}
          alt='gif'
        />
        <CardContent sx={{ height: '40px' }}>
          <Typography gutterBottom variant='h7' component='div' sx={{ textAlign: 'center', textTransform: 'Uppercase', display: '-webkit-box', textOverflow: 'ellipsis', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: '2' }}>
            {title}
          </Typography>
        </CardContent>
      </Card>
      </Grow>
    </>
  )
}

GifGridCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
