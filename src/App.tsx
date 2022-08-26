import React from "react";

import { Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./components/GlobalStyle";
import { Header } from "./components/Header";
import { Page } from "./components/Page";
import { CardDetailPage } from "./pages/CardDetailPage";
import { Homepage } from "./pages/Homepage";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Page>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/card-detail" element={<CardDetailPage />} />
          <Route path="*" element={<p>Na této stránce nic není :(</p>} />
        </Routes>
      </Page>
    </>
  );
};
