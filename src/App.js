import React, { useState} from 'react';
import Provider from './Provider';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
