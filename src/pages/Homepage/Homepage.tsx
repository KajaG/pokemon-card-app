import React from "react";
import { PokemonList } from "../../components/PokemonList";

export const Homepage: React.FC = () => {
  return (
    <>
      <h1>Moje sbírka Pokemon kartiček</h1>
      <PokemonList />
    </>
  );
};
