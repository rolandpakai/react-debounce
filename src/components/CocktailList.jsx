import React from 'react'
import { useGlobalContext } from "../context"; 
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailList = () => {
    const { searchTerm, cocktails, loading, error } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2 className='section-title'>{error}</h2>;
  }

  if (searchTerm !== undefined && searchTerm !== "") {
    if (cocktails.length === 0) {
      return <h2 className='section-title'>No cocktails found.</h2>;
    }

    return (
      <section className='section'>
        <h2 className='section-title'>Cocktails</h2>
        <div className='cocktail-center'>
          {cocktails.map((cocktail) => {
            return <Cocktail key={cocktail.idDrink} {...cocktail} />
          })}
        </div>
      </section>
    )
  }
}

export default CocktailList