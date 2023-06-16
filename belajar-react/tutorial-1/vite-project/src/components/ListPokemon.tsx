import { useMemo } from "react";

interface ListPokemonProps {
  nama?: string;
  pokemons: Pokemon[];
}

interface Pokemon {
  id: number;
  url: string;
  name: string;
  isActive?: boolean;
}

export const ListPokemon = ({ pokemons }: ListPokemonProps) => {
  const data = useMemo(() => {
    return pokemons;
  }, [pokemons]);

  const handleChangeStatus = (id: number) => {
    const findIndex = data.find((value) => value.id === id);
    console.log(findIndex);

    data.map((user) => {
      if (user.id === findIndex?.id) {
        return {
          ...user,
          isActive: "Active",
        };
      }
      return user;
    });
  };

  return (
    <div>
      <h1>Daftar Pokemon</h1>
      {data.map((user: Pokemon, idx: number) => {
        return (
          <ul key={idx}>
            <li>
              Nama Pokemon: {user.name} -{" "}
              {user.isActive ? "active" : "not active"}{" "}
              <button onClick={() => handleChangeStatus(user.id)}>
                Change Status
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
