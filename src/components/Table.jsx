import React, { useContext, useState } from 'react';
import AppContext from '../AppContext';

function Table() {
  const {
    planets,
    setNamePlanet,
    namePlanet,
    filters,
    setFilters,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue } = useContext(AppContext);

  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const renderPlanets = () => {
    const size = filters.filterByNumericValues.length;
    let planetsArray = null;
    // console.log(filters.filterByNumericValues[size-1]?.column);
    if (namePlanet) {
      planetsArray = planets.filter(
        (planet) => planet.name.includes(namePlanet),
      );
    } else if (
      namePlanet === ''
      && filters.filterByNumericValues[size - 1].comparison === 'maior que') {
      console.log('dentro do if maiorQue');
      planetsArray = planets.filter(
        (planet) => (
          planet[filters.filterByNumericValues[size - 1].column]
          > parseInt(filters.filterByNumericValues[size - 1].value, 10)
        ),
      );
    } else if (namePlanet === ''
      && filters.filterByNumericValues[size - 1].comparison === 'menor que') {
      planetsArray = planets.filter(
        (planet) => (
          planet[filters.filterByNumericValues[size - 1].column]
          < parseInt(filters.filterByNumericValues[size - 1].value, 10)
        ),
      );
    } else if (namePlanet === ''
      && filters.filterByNumericValues[size - 1].comparison === 'igual a') {
      planetsArray = planets.filter(
        (planet) => (
          planet.name.includes(namePlanet)
          && parseInt(planet[filters.filterByNumericValues[size - 1].column], 10)
          === parseInt(filters.filterByNumericValues[size - 1].value, 10)
        ),
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
          {planetsArray.map((planet, index) => (
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
          ))}
        </tbody>
      </table>
    );
  };

  const submitFilter = () => {
    setColumns(columns.filter((name) => name !== column));
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  return (
    <div>
      {JSON.stringify(filters)}
      <input
        type="text"
        onChange={ (e) => setNamePlanet(e.target.value) }
        data-testid="name-filter"
        value={ namePlanet }
      />
      <select
        data-testid="column-filter"
        name="column"
        onChange={ (event) => setColumn(event.target.value) }
        value={ column }
      >
        { columns.map((columnName) => (
          <option key={ columnName }>
            { columnName }
          </option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ (event) => setComparison(event.target.value) }
        value={ comparison }
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
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={ (event) => setValue(event.target.value) }
        value={ value }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ submitFilter }
      >
        Filtrar
      </button>
      {
        renderPlanets()
      }
    </div>
  );
}

export default Table;
