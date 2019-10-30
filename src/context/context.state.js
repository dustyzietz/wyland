import React, { createContext, useState } from 'react';
import uuid from 'uuid';
import {initialArt} from '../store';

export const StateContext = createContext();

export function StateProvider (props) {
  const art = JSON.parse(window.localStorage.getItem('paintings')) || initialArt ;
  const [currentTab, setCurrentTab] = useState(0);
  const [addFormOn, setAddFormOn] = useState(false);
  const [paintings, setPaintings] = useState(art);
  const [adminOn, setAdminOn] = useState(false);

const addPainting = (artist, title, image) => {
setPaintings([...paintings, {artist, title, image, id:uuid()}]);
toggleAddForm()
};

const toggleAdmin = () => {
  setAdminOn(!adminOn);
};

const removePainting = (id) => {
setPaintings(paintings.filter(painting => painting.id !== id));
};

  const toggleAddForm = () => {
   setAddFormOn(!addFormOn);
  };
  const changeTab = (event, num) => {
    setCurrentTab(num)
  };
  return (
    <StateContext.Provider value={{currentTab, changeTab, addFormOn, toggleAddForm, paintings, addPainting, removePainting, adminOn, toggleAdmin}}>
      {props.children}
    </StateContext.Provider>
  )
}