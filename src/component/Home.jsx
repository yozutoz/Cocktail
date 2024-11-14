// src/Home.jsx
import React, { useEffect, useState } from "react";
import CocktailCard from "./CocktailCard";
import { Link } from "react-router-dom";

function Home() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks.slice(0, 6)));
  }, []);

  return (
    <div className="home">
      <h1>Les Cocktails</h1>
      <div className="cocktail-list">
        {cocktails.map((cocktail) => (
          <Link key={cocktail.idDrink} to={`/cocktail/${cocktail.idDrink}`}>
            <CocktailCard cocktail={cocktail} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
