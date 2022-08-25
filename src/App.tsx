import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import { Page } from "./components/Page";
import { PokemonList } from "./components/PokemonList";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Page>
        <h1>Moje sbírka Pokemon kartiček</h1>
        <PokemonList />
      </Page>
    </>
  );
};
