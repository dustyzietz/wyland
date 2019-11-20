import React from "react";
import Prismic from "prismic-javascript";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';



export default function Artists() {
  const [doc, setDocData] = React.useState(null);
  const [currentArtist, setCurrentArtist] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const apiEndpoint = "https://gallery-website.cdn.prismic.io/api/v2";
      const Client = Prismic.client(apiEndpoint);
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "artistpage")
      );
      if (response) {
        setDocData(response.results);
      }
    };
    fetchData();
  }, []);

  const openPage = art => {
    setCurrentArtist(art);
  };


  return (
    <Grid container>
      {currentArtist ? 
      <Grid item xs={12} >
        <div style={{margin:'auto',padding: '0 10%',maxWidth: '800px'}}>
          <Typography variant='h4'style={{textAlign:'center',padding:'1vw'}}>
              { currentArtist.data.name[0].text}
          </Typography>
     
        <img src={currentArtist.data.photo.url} alt='' style={{ objectFit: 'contain', height: '150px',float:'left',margin:'0 1vw'}}/>
      
       
        <Typography variant='body2'>
          {currentArtist.data.bio.map(p => 
            p.text
          )}
        </Typography>
        <div>
          
        </div>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<ArrowBack />}
      >
        All Artists
      </Button>
       </div>
      </Grid>
      :


      doc && doc.map(art => (

        <Grid item xs={12} sm={6} lg={4} key={art.data.name[0].text}>
          <div style={{ margin: '10%', border: 'thin solid black', textAlign: 'center', borderRadius: '1vw', overflow: 'hidden', color: 'white', backgroundColor: 'black' }} onClick={() => openPage(art)} >
            <img src={art.data.painting.url} alt='' style={{ objectFit: 'contain', width: '100%' }} />
            <Typography variant='body1' >
              {art.data.name[0].text}
            </Typography>
          </div>
        </Grid>
      ))}

    </Grid>
  );
}
