import React, { useState, useContext } from 'react';
import AppContext from './AppContext';
import Table from './components/Table';
import Provider from './Provider';

function App() {
  
  // <input type="text" onChange={ (e) => setNamePlanet(e.target.value) } data-testid='name-filter' value={ namePlanet } />
  return (
    <Provider>
      
      <Table />
    </Provider>
  );
}

export default App;
