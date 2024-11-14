// src/CocktailCard.jsx
import React from "react";

function CocktailCard({ cocktail }) {
  return (
    <div className="cocktail-card">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h2>{cocktail.strDrink}</h2>
    </div>
  );
}

export default CocktailCard;
