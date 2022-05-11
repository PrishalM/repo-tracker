import React from "react";
import { Routes, Route } from "react-router-dom";

import { SearchPage, RepoPage, NotFoundPage } from "./pages";

import { default as Layout } from "./layouts";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/">
          <Route path="/" element={<SearchPage />} />
          <Route path=":name" element={<RepoPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
