import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { api } from "../../lib/api";

import { IPokemonInfo } from "../../types";
import {
  CardDetailImage,
  CardDetailInfo,
  CardDetailInfoColumn,
  CardDetailInfoTitle,
  CardDetailList,
  CardDetailStyled,
} from "./CardDetail.styled";

interface IPokemon {
  monName: string;
}

export const CardDetail: React.FC<IPokemon> = ({ monName }) => {
  const { t } = useTranslation();
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
    <CardDetailStyled>
      <h1>{monName}</h1>
      <CardDetailImage>
        <img
          src={monDetail?.sprites.other.dream_world.front_default}
          alt={monName}
        />
      </CardDetailImage>

      <CardDetailInfo>
        <CardDetailInfoColumn>
          <CardDetailInfoTitle>Základní info</CardDetailInfoTitle>
          <CardDetailList>
            <li>
              <b>Zkušenosti:</b>
              {monDetail?.base_experience}
            </li>
            <li>
              <b>Váha:</b>
              {monDetail?.weight}
            </li>
            <li>
              <b>Výška:</b>
              {monDetail?.height}
            </li>
            <li>
              <b>Schopnosti:</b>
              <CardDetailList>
                {monDetail.abilities.map((mon, idx) => (
                  <li key={idx}>
                    {mon.ability.name}
                    {monDetail.abilities.length - 1 !== idx ? ", " : ""}
                  </li>
                ))}
              </CardDetailList>
            </li>
            <li>
              <b>Typ pokémona:</b>
              <CardDetailList>
                {monDetail.types.map((mon, idx) => (
                  <li key={idx}>
                    {t(mon.type.name.replace("-", "_"))}
                    {monDetail.types.length - 1 !== idx ? ", " : ""}
                  </li>
                ))}
              </CardDetailList>
            </li>
          </CardDetailList>
        </CardDetailInfoColumn>
        <CardDetailInfoColumn>
          <CardDetailInfoTitle>Statistiky</CardDetailInfoTitle>
          <CardDetailList>
            {monDetail.stats.map((mon, idx) => (
              <li key={idx}>
                <b>{t(mon.stat.name.replace("-", "_"))}:</b>
                <span>{mon.base_stat}</span>
              </li>
            ))}
          </CardDetailList>
        </CardDetailInfoColumn>
      </CardDetailInfo>
    </CardDetailStyled>
  );
};
