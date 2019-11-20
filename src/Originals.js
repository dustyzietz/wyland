import React, { useState } from "react";
import Gallery from 'react-grid-gallery';
import Prismic from "prismic-javascript";

export default function Originals() {
  const [doc, setDocData] = React.useState(null);
  

  React.useEffect(() => {
    const fetchData = async () => {
      const apiEndpoint = "https://gallery-website.cdn.prismic.io/api/v2";
      const Client = Prismic.client(apiEndpoint);
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "paintings")
      );
      if (response) {
        setDocData(response.results);
      }
    };
    fetchData();
  }, []);
  
 
   const IMAGES =  doc &&
  doc.map(function(painting)  {
    return{
          src: painting.data.image.url,
          thumbnail: painting.data.image.url,
          thumbnailWidth: 200,
          thumbnailHeight: "auto",
          isSelected: false,
          caption: `By:${painting.data.artist[0].text} (${painting.data.details[0].text}) `}
  },)
  
 
  
  
 
  return (
    <>
   {doc && <Gallery images={IMAGES} enableImageSelection={false} />}
    </>
  );
}
