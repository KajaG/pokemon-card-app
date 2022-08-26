import React, { useState, useEffect } from "react";

import { api } from "../../lib/api";
import { IPokemonBasic } from "../../types";
import { ButtonStyled } from "../Button/Button";

import { PokemonCard } from "../PokemonCard";
import { PokemonListStyled } from "./PokemonList.styled";

export const PokemonList: React.FC = () => {
  const [mons, setMons] = useState<IPokemonBasic[]>([]);
  const [nextPage, setNextPage] = useState("");

  const fetchMons = async () => {
    try {
      const result = await api.fetchMons(nextPage);

      const newPokemons = result.data.results;

      setNextPage(result.data.next);
      setMons([...mons, ...newPokemons]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMons();
  }, []);

  return (
    <>
      <PokemonListStyled>
        {mons.map((mon, idx) => (
          <PokemonCard key={idx} monName={mon.name} />
        ))}
      </PokemonListStyled>

      <ButtonStyled onClick={fetchMons}>Načíst více</ButtonStyled>
    </>
  );
};
