import React from "react";
import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Questions, Signup, Result ,Quizboard } from "./pages";
import { Navbar } from "./components";
const App: React.FC = () => {
  return (
    <main className={style["container"]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quiz/:categoryID" element={<Questions />} />
        <Route path="/result" element={<Result />} />
        <Route path="/quizboard" element={<Quizboard/>}/>
      </Routes>
    </main>
  );
};

export default App;
