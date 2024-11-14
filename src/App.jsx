// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./component/Home";
import CocktailDetail from "./component/CocktailDetail";
import RandomCocktail from "./component/RandomCocktail";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/random">Cocktail Aléatoire</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail/:id" element={<CocktailDetail />} />
          <Route path="/random" element={<RandomCocktail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
