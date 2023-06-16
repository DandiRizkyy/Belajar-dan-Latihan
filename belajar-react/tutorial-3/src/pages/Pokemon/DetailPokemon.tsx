import { useParams } from "react-router-dom";

export const DetailPokemon = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <>
      <h4>Pokemon Name: {name}</h4>
    </>
  );
};
