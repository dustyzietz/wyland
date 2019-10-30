import React,{useContext, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import {StateContext} from './context/context.state';
import Artists from './Artists';
import Originals from './Originals';



function WylandApp() {
  const {currentTab, paintings} = useContext(StateContext);

  useEffect (() => {
    window.localStorage.setItem('paintings',JSON.stringify(paintings)) ;
 },[paintings]);

  return (
    <div >
     <Header/>
     {currentTab === 0 ? <Gallery/> :
      currentTab === 1 ? <Artists/> :
      <Originals/>}
   
     <Footer/>
    </div>
  );
}

export default WylandApp;
