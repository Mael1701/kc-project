import React from 'react';
import './App.css';

import NavBar from "./components/NavBar"
import MainContainer from './components/MainContainer';
import Carouselnav from './components/Caroussel';
import SponsorList from './components/SponsorList';

function App() {
  return (
    <div className='Body'>
      <NavBar></NavBar>
      <Carouselnav />
      <MainContainer />
      <SponsorList />
    </div>
  );
};

export default App;
