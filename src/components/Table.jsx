import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../AppContext';

function Table() {
  const {
    planets,
    setNamePlanet,
    namePlanet,
    filtersContext,
    setFilters } = useContext(AppContext);

    const [column, setColumn] = useState('population');
    const [comparison, setComparison] = useState('');
    const [value, setValue] = useState(0);

    // console.log(planets);
    /* const { name } = filters.filterByName;
    const { column, comparison, value } = filters.filterByNumericValues; */

  /* useEffect(() => {
    let planetsArray = [];
  
    console.log('array vindo de dentro do useEffect: ');
    console.log(planetsArray);
  },
  [filtersContext])*/

  const renderPlanets = () => {
    const tamanho = filtersContext.filters.filterByNumericValues.length
    const { comparison } = filtersContext.filters.filterByNumericValues[tamanho];
    let planetsArray = null;
    if (namePlanet && comparison === '') {
      planetsArray = planets.filter(
        (planet) => planet.name.includes(namePlanet)
      );
    } else if (comparison === 'maior que') {
      console.log('dentro do if maiorQue');
      planetsArray = planets.filter(
        (planet) => planet.name.includes(namePlanet) && planet.population > parseInt(value)
      );
    } else if (namePlanet && comparison === 'menor que') {
      planetsArray = planets.filter(
        (planet) => planet.name.includes(namePlanet) && planet.population < parseInt(value)
      );
    } else if (namePlanet && comparison === 'igual a') {
      planetsArray = planets.filter(
        (planet) => planet.name.includes(namePlanet) && planet.population === parseInt(value)
      );
    } else {
      planetsArray = planets;
    }

    return (
      <table border="1">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Período de Rotação</th>
          <th>Período Orbital</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água Superfície</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criação</th>
          <th>Edição</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
      { planetsArray.map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        )) }
      </tbody>
    </table>
    );
  }

  const submitFilter = () => {
    console.log('evento de submit')
;    filtersContext.filters.filterByNumericValues.push({
      column,
      comparison,
      value,
    })
    setFilters(filtersContext);
    console.log(filtersContext)
  }

  return (
    <div>
      <input type="text" onChange={ (e) => setNamePlanet(e.target.value) } data-testid='name-filter' value={ namePlanet } />
      <select
        data-testid='column-filter'
        onChange={(event) => setColumn(event.target.value)}
        value={ column }
        name="column"
      >
        <option>
          population
        </option>
        <option>
          orbital_period
        </option>
        <option>
          diameter
        </option>
        <option>
          rotation_period
        </option>
        <option>
          surface_water
        </option>
      </select>

      <select
        data-testid='comparison-filter'
        onChange={(event) => {
          console.log(event.target.value)
          setComparison(event.target.value);
        }}
        value={comparison}
        name="comparison"
      >
        <option>
          maior que
        </option>
        <option>
          menor que
        </option>
        <option>
          igual a
        </option>
      </select>

      <input
        data-testid='value-filter'
        type="number"
        onChange={(event) => setValue(event.target.value)}
        value={ value }
        name="value"
      />

      <button data-testid='button-filter' onClick={ submitFilter }>Filtrar</button>
      {
        renderPlanets()
      }
    </div>
  );
}

export default Table;
