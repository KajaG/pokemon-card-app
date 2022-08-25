import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export const api = {
  fetchMons: () => axios.get(""),

  fetchMonInfo: (name: string) => axios.get(`/${name}`),

  fetchMoreMons: (url: string) => axios.get(`${url}`),
};
