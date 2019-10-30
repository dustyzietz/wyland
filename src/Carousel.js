import React from "react";
import wylandLogo from "./images/wylandLogo.png";
import { Gallery, GalleryImage } from "react-gesture-gallery";

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
        "https://www.wyland.com/wp-content/uploads/2019/02/disney-featured.jpg"
    },
    {
      banner: "third Image",
      footer: "on sale now ",
      src:
        "https://www.wyland.com/wp-content/uploads/2019/02/canaveral-featured.jpg"
    }
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
const interval = setInterval(() => {
  if (index === images.length - 1){
    setIndex(0)
  }else{setIndex(index + 1) }
  },5000)
return () => clearInterval(interval)
  },[index]);


  return (
    <div style={{height: '400px',position: 'relative'}}>
    <Gallery
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage src={image.src} />
      ))}
    </Gallery>
    <div style={{position: 'absolute', top: 0 ,width: '100%', textAlign: 'center'}}>
      {images[index].banner}
    </div>
    </div>
  );
}
