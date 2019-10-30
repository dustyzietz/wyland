import React, {useContext} from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {StateContext} from './context/context.state';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


export default function Originals() {
  const {paintings, removePainting, adminOn} = useContext(StateContext);
  return (
    <>
    <Grid container >
      {paintings.map(painting => (
        <Grid item xs={6} sm={4} lg={3} xl={2}>
          <Card
            style={{
              position: "relative",
              margin: "1vw",
              backgroundImage: `url(${painting.image})`,
              backgroundColor: "powderblue",
              height: "250px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
              <Typography variant="h5" style={{
                textAlign: "center",
                backgroundColor: "rgba(365, 365, 365, 0.4)"
              }}>{painting.title}</Typography>
           
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "10px",
                backgroundColor: "rgba(365, 365, 365, 0.4)",
                margin: "1vw",
                padding: '.5vw',
                borderRadius: '.5vw',
              }}
            >
              <Typography variant="p">{painting.artist}</Typography>
            </div>
          {adminOn &&  <Button onClick={()=>removePainting(painting.id)}>Delete</Button>}
          </Card>
        </Grid>
      ))}
     
    </Grid>
     <div style={{height: '45px'}}></div>
     </>
  );
}
