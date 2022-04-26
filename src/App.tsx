import React from "react";
import logo from "./logo.svg";
import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components";
const App: React.FC = () => {
  return (
    <main className={style["container"]}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
