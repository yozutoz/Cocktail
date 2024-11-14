// src/Home.jsx
import React, { useEffect, useState } from "react";
import CocktailCard from "./CocktailCard";
import { Link } from "react-router-dom";

function Home() {
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState(""); // Nouveau state pour la requête

  // Fonction pour effectuer la recherche de cocktails
  const fetchCocktails = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    setCocktails(data.drinks ? data.drinks.slice(0, 6) : []);
  };

  // Appel initial pour récupérer les cocktails par défaut
  useEffect(() => {
    fetchCocktails();
  }, [query]);

  // Fonction pour déclencher la recherche lorsque le bouton est cliqué
  const handleSearch = () => {
    setQuery(searchTerm);
  };

  // Gestion de l'événement "Enter" pour déclencher la recherche
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="home">
      <h1>Les Cocktails</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher un cocktail..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress} // Ajout de l'événement Enter
          className="search-bar"
        />
        <button onClick={handleSearch} className="search-button">
          Rechercher
        </button>
      </div>
      <div className="cocktail-list">
        {cocktails.length > 0 ? (
          cocktails.map((cocktail) => (
            <Link key={cocktail.idDrink} to={`/cocktail/${cocktail.idDrink}`}>
              <CocktailCard cocktail={cocktail} />
            </Link>
          ))
        ) : (
          <p>Aucun résultat trouvé.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
