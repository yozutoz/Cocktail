// src/RandomCocktail.jsx
import React, { useEffect, useState } from "react";

function RandomCocktail() {
  const [cocktail, setCocktail] = useState(null);

  const fetchRandomCocktail = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setCocktail(data.drinks[0]));
  };

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  if (!cocktail) return <p>Chargement...</p>;

  return (
    <div className="random-cocktail">
      <h1>Cocktail Aléatoire</h1>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <button onClick={fetchRandomCocktail}>Un autre !</button>
    </div>
  );
}

export default RandomCocktail;
