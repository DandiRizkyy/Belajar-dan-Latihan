import { useContext, useEffect } from "react";
import { AppContext } from "../../provider/Provider";
import { Link } from "react-router-dom";

export const ListPokemon = () => {
  // bagian provider
  const context = useContext(AppContext);
  useEffect(() => {
    context?.fetchDataPokemon();
  }, []);
  // bagian provider
  return (
    <>
      <h4>List Pokemon</h4>
      <ul>
        {context?.pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
