import React, { useState, useEffect } from "react";

import { api } from "../../lib/api";
import { IPokemonBasic } from "../../types";
import { ButtonStyled } from "../Button/Button.styled";

import { PokemonCard } from "../PokemonCard";
import { PokemonListStyled } from "./PokemonList.styled";

export const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemonBasic[]>([]);
  const [nextPage, setNextPage] = useState(String);

  const getData = async () => {
    try {
      const result = await api.fetchMons();
      setPokemons(result.data.results);
      setNextPage(result.data.next);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMoreMons = async (url: string) => {
    try {
      const result = await api.fetchMoreMons(url);

      const newData = result.data.results;
      const copy = pokemons.map((pokemon) => ({ ...pokemon }));

      copy.push(...newData);

      setNextPage(result.data.next);
      setPokemons(copy);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const buttonClick = () => {
    fetchMoreMons(nextPage);
  };

  return (
    <>
      <PokemonListStyled>
        {pokemons.map((mon, idx) => (
          <PokemonCard key={idx} monName={mon.name} />
        ))}
      </PokemonListStyled>

      <ButtonStyled onClick={() => buttonClick()}>Načíst více</ButtonStyled>
    </>
  );
};
