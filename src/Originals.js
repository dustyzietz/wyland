import React, { useState } from "react";
import Gallery from 'react-grid-gallery';
import Card from "@material-ui/core/Card";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Prismic from "prismic-javascript";

export default function Originals() {
  const [doc, setDocData] = React.useState(null);
  const [bigDialogOn, setBigDialogOn] = useState(false);
  const [bigPicture, setBigPicture] = useState(null);

  const showPainting = index => {
    setBigPicture(doc[index]);
    toggleBigDialog();
  };

  const toggleBigDialog = () => {
    setBigDialogOn(!bigDialogOn);
  };

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
          
          thumbnailHeight: 174,
          isSelected: false,
          caption: `By:${painting.data.artist[0].text} (${painting.data.details[0].text}) `}
  },)
  
 
  
  
 
  return (
    <>
   {doc && <Gallery images={IMAGES}/>}
    </>
  );
}
