import React, {useState, useContext, useEffect } from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [error, setError] = useState(null);

  const fetchDrinks = async (searchTerm) => {
    setLoading(true);
    setSearchTerm(searchTerm);
    let drinks = [];

    if (searchTerm !== undefined && searchTerm !== "") {
      try {
        const response = await fetch(`${url}${searchTerm}`);
        const data = await response.json();
  
        drinks = Array.isArray(data.drinks) ? data.drinks : [];
      } catch (err) {
        setError(err.message);
      }
    }

    setCocktails(drinks);
    setLoading(false);
  }

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <AppContext.Provider value={{ searchTerm, loading, cocktails, error, fetchDrinks }}>
      {children}
    </AppContext.Provider>
  );

};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };