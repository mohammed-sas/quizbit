import React from "react";
import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Questions,
  Signup,
  Result,
  Quizboard,
  Rules,
  NotFound,
} from "./pages";
import { Navbar, RequiresAuth } from "./components";
import { useTheme } from "./context";
const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <main
      className={`${style["container"]} ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/quiz/:categoryID"
          element={
            <RequiresAuth>
              <Questions />
            </RequiresAuth>
          }
        />
        <Route
          path="/result"
          element={
            <RequiresAuth>
              <Result />
            </RequiresAuth>
          }
        />
        <Route
          path="/quizboard"
          element={
            <RequiresAuth>
              <Quizboard />
            </RequiresAuth>
          }
        />
        <Route
          path="/rules"
          element={
            <RequiresAuth>
              <Rules />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
