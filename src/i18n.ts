// typy src - https://pokemaniak.cz/pokemon-go-manual/pokemon-go-pokemoni-typy-a-kalkulacka-efektivity

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const initLocales = () => {
  i18n.use(initReactI18next).init({
    debug: true,
    lng: "cz",
    fallbackLng: "cz",
    resources: {
      cz: {
        translation: {
          hp: "životy",
          attack: "útok",
          defense: "obrana",
          special_attack: "speciální útok",
          special_defense: "speciální obrana",
          speed: "rychlost",
          poison: "jedový",
          grass: "travní",
          normal: "normální",
          fire: "ohnivý",
          water: "vodní",
          electric: "elektrický",
          flying: "létající",
          ground: "zemní",
          rock: "kamenný",
          fighting: "bojový",
          ice: "ledový",
          bug: "hmyzí",
          ghost: "duchový",
          psychic: "psychický",
          dragon: "dračí",
          dark: "temný",
          steel: "ocelový",
          fairy: "vílí",
        },
      },
    },
  });
};
