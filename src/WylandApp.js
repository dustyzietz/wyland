import React,{useContext} from 'react';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import {StateContext} from './context/context.state';
import Artists from './Artists';
import Originals from './Originals';



function WylandApp() {
  const {currentTab} = useContext(StateContext);


  return (
    <div >
     <Header/>
     {currentTab === 0 ? <Gallery/> :
      currentTab === 1 ? <Artists/> :
      <Originals/>}
     
     <div style={{height: '45px'}}></div>
   
     <Footer/>
    </div>
  );
}

export default WylandApp;
