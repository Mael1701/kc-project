import React from 'react';
import './App.css';

import NavBar from "./components/navbar"
import UncontrolledExample from './components/caroussel'
import MainContainer from './components/main_container';

function App() {
  return (
    <div className='Body'>
      <NavBar></NavBar>
      <UncontrolledExample />
      <MainContainer />
    </div>
  );
};

export default App;
