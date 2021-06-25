import React, { useState, useContext } from 'react';
import AppContext from './AppContext';
import Table from './components/Table';

function App() {
  const { namePlanet, setNamePlanet } = useContext(AppContext);
  // <input type="text" onChange={ (e) => setNamePlanet(e.target.value) } data-testid='name-filter' value={ namePlanet } />
  return (
    <>
      <input type="text" onChange={ (e) => setNamePlanet(e.target.value) } data-testid='name-filter' value={ namePlanet } />
      <Table />
    </>
  );
}

export default App;
