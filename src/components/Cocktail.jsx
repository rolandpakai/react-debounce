import React from 'react'

const Cocktail = (props) => {
  const { strDrink, strDrinkThumb, strAlcoholic, strGlass } = props;
  
  return (
    <article className='cocktail'>
    <div className='img-container'>
      <img src={strDrinkThumb} alt={strDrink} />
    </div>
    <div className='cocktail-footer'>
      <h3>{strDrink}</h3>
      <h4>{strGlass}</h4>
      <p>{strAlcoholic}</p>
    </div>
  </article>
  )
}

export default Cocktail