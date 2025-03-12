import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { HomePage } from "pages/HomePage";
import { Details } from "pages/Details";
import { NotFound } from "pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
