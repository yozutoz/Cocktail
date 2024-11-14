// src/CocktailDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CocktailDetail() {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => setCocktail(data.drinks[0]));
  }, [id]);

  if (!cocktail) return <p>Chargement...</p>;

  return (
    <div className="cocktail-detail">
      <h1>{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p><strong>Catégorie:</strong> {cocktail.strCategory}</p>
      <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
      <h3>Ingrédients :</h3>
      <ul>
        {[...Array(15)].map((_, i) => {
          const ingredient = cocktail[`strIngredient${i + 1}`];
          const measure = cocktail[`strMeasure${i + 1}`];
          return ingredient ? <li key={i}>{measure} {ingredient}</li> : null;
        })}
      </ul>
    </div>
  );
}

export default CocktailDetail;
