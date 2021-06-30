import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const INITIAL_STATE_FILTERS = {
  filterByName: { name: '' },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};
function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [namePlanet, setNamePlanet] = useState('');
  const [filters, setFilters] = useState(INITIAL_STATE_FILTERS);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const getPlanets = () => fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json')
    .then((response) => response.json())
    .then((response) => {
      setPlanets(response.results);
    });

  useEffect(() => {
    console.log('');
    getPlanets();
  }, []);

  const contextValue = {
    planets,
    setPlanets,
    namePlanet,
    setNamePlanet,
    filters,
    setFilters,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
