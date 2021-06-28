import React, { useContext } from 'react';
import AppContext from '../AppContext';

function Table() {
  const { planets, setNamePlanet, namePlanet } = useContext(AppContext);
  /*  */
  const renderPlanets = () => {
    let planetsArray = null;
    if (namePlanet) {
      planetsArray = planets.filter(
        (planet) => planet.name.includes(namePlanet),
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

  return (
    <div>
      <input type="text" onChange={ (e) => setNamePlanet(e.target.value) } data-testid='name-filter' value={ namePlanet } />
      {
        renderPlanets()
      }
    </div>
  );
}

export default Table;
