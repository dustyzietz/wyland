import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import Typography from '@material-ui/core/Typography';
import Prismic from "prismic-javascript";




export default function Carousel() {
  const images = [
    {
      banner: "first image",
      footer: "information about picture",
      src:
        "https://www.wyland.com/wp-content/uploads/2019/01/outside509_555x555_.jpg"
    },
    {
      banner: "second Image",
      footer: "come get art",
      src:
        "https://i2.wp.com/biz360tours.com/wp-content/uploads/2014/04/wyland-galleries-port-canaveral-5.jpg?w=800&ssl=1"
    },
    {
      banner: "third Image",
      footer: "on sale now ",
      src:
        "https://www.wyland.com/wp-content/uploads/2019/02/canaveral-featured.jpg"
    }
  ];

  const [doc, setDocData] = React.useState(null);


  React.useEffect(() => {
    const fetchData = async () => {
      const apiEndpoint = "https://gallery-website.cdn.prismic.io/api/v2";
      const Client = Prismic.client(apiEndpoint);
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "carouselimage")
      );
      if (response) {
        setDocData(response.results);
      }
    };
    fetchData();
  }, []);

  const [index, setIndex] = React.useState(0);

   React.useEffect(() => {
const interval = setInterval(() => {
  if (index === 3 ){
    setIndex(0)
  }else{setIndex(index + 1) }
  },5000)
return () => clearInterval(interval)
  },[index]);


  return (
    <div style={{height: '350px',position: 'relative'}}>
      {doc && <Gallery
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    > 
     { doc.map(pic => (
         <GalleryImage src={pic.data.image.url} key={pic.data.banner[0].text} />
      ))}
      </Gallery> }
    <div style={{position: 'absolute', top: 0 ,width: '100%', textAlign: 'center', backgroundColor: 'rgba(365, 365, 365, 0.3)'}}>
     {doc && <Typography variant='h5' style={{color: 'rgba(0, 0, 0, 0.7)'}}>{doc[index].data.banner[0].text}
     </Typography> }
    </div>
    </div>
  );
}
