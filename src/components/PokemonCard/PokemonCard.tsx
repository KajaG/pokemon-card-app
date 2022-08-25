import React, { useEffect, useState } from "react";

import { api } from "../../lib/api";

import { IPokemonInfo } from "../../types";
import {
  PokemonCardImage,
  PokemonCardStyled,
  PokemonCardInfo,
  PokemonCardTitle,
  PokemonCardText,
} from "./PokemonCard.styled";

interface IPokemon {
  monName: string;
}

export const PokemonCard: React.FC<IPokemon> = ({ monName }) => {
  const [monDetail, setMonDetail] = useState<IPokemonInfo>();

  const getMon = async (name: string) => {
    try {
      const result = await api.fetchMonInfo(name);
      setMonDetail(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMon(monName);
  }, [monName]);

  if (!monDetail) return null;

  return (
    <PokemonCardStyled
      isStrong={monDetail?.base_experience > 200 ? true : false}
    >
      <PokemonCardTitle>{monName}</PokemonCardTitle>
      <PokemonCardImage>
        <img
          src={monDetail?.sprites.other.dream_world.front_default}
          alt={monName}
        />
      </PokemonCardImage>

      <PokemonCardInfo>
        <PokemonCardText>
          <b>Zkušenosti:</b>
          {monDetail?.base_experience}
        </PokemonCardText>
        <PokemonCardText>
          <b>Váha:</b>
          {monDetail?.weight}
        </PokemonCardText>
        <PokemonCardText>
          <b>Výška:</b>
          {monDetail?.height}
        </PokemonCardText>
        <PokemonCardText>
          <b>Schopnosti:</b>
          <div>
            {monDetail.abilities.map((mon, idx) => (
              <span key={idx}>{mon.ability.name}</span>
            ))}
          </div>
        </PokemonCardText>
      </PokemonCardInfo>
    </PokemonCardStyled>
  );
};
