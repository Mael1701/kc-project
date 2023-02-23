import React from 'react';
import './App.css';

import NavBar from "./components/navbar"
import UncontrolledExample from './components/caroussel';

function App() {
  return (
    <div className='Body'>
      <NavBar></NavBar>
      <UncontrolledExample />
    </div>
  );
};

export default App;
