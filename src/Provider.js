import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [namePlanet, setNamePlanet] = useState('');

  const getPlanets = () => fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json')
    .then((response) => response.json())
    .then((response) => {
      // console.log(response.results);
      setPlanets(response.results);
    });

  useEffect(() =>{
    getPlanets();
  }, []);

  const contextValue = {
    planets,
    setPlanets,
    namePlanet,
    setNamePlanet,
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
