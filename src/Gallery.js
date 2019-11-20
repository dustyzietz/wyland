import React from 'react';
import Carousel from './Carousel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Prismic from "prismic-javascript";


  

export default function Gallery() {

  const [doc, setDocData] = React.useState(null);
  

  React.useEffect(() => {
    const fetchData = async () => {
      const apiEndpoint = "https://gallery-website.cdn.prismic.io/api/v2";
      const Client = Prismic.client(apiEndpoint);
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "gallery")
      );
      if (response) {
        setDocData(response.results[0].data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {console.log(doc)}
      <Carousel/>
      <Paper style={{textAlign: 'center', height:'40vh'}}>
    <Typography variant='h4'style={{margin: '4vw'}}>
{doc && doc.maintitle[0].text}
    </Typography>
    <Typography variant='body1' style={{display: 'block' ,margin: '0 8vw'}} >
     {doc && doc.info[0].text}
    </Typography>
    <Typography variant='body1' style={{display: 'block' ,margin: '0 8vw'}} >
     ADDRESS
    </Typography>
    <Typography variant='body1' style={{display: 'block' ,margin: '0 8vw'}} >
     {doc && doc.address[0].text}
    </Typography>
      </Paper>
    </div>
  )
}
