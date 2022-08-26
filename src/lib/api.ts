import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export const api = {
  fetchMonInfo: (name: string) => axios.get(`/${name}`),

  fetchMons: (url: string) => axios.get(`${url}`),
};
