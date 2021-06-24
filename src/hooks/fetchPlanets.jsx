import { useState, useEffect } from "react";

const [planets, setPlanets] = useState([]);

const usePlanets = () => {
  useEffect(() => {
    const getPlanets = async () => {
      // https://swapi-trybe.herokuapp.com/api/planets/?format=json
      const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json')
        .then((response) => response.json())
        .then(response);
      console.log(response);
      tablePlanets = planets.results.map((planet, index) => (
        <tr key= {index} >
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
        </tr>));

      setPlanets(tablePlanets);
    };

    getPlanets();
  });
};

export default usePlanets;
