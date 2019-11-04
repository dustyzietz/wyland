import React from 'react';
import Carousel from './Carousel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

  

export default function Gallery() {
  return (
    <div>
      <Carousel/>
      <Paper style={{textAlign: 'center', height:'40vh'}}>
    <Typography variant='h4'style={{margin: '4vw'}}>
Opening Soon Wyland Gallery Kauai
    </Typography>
    <Typography variant='body1' style={{display: 'block' ,margin: '0 8vw'}} >
      Come behold a unique collection of fine art. The new Wyland Gallery Kauai not only features a large collection of work from none other than wyland, regarded as the most succesful marine artist in the world, but also a broad selection of original painting from some of the states best painters.
      located in kilauea some other stuff.Come Buy Buy Buy art and things and stuff.We like u spend money. We then give you art. 
    </Typography>
      </Paper>
    </div>
  )
}