import React, {useState, useEffect, useMemo} from 'react'
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  //const [timeoutId, setTimeoutId] = useState(null);
  const { fetchDrinks } = useGlobalContext();

  /*
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    }
  }, [timeoutId]);
  */

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = (e) => {
    let timeoutId;

    return (e) => {
      const searchTerm = e.target.value;
      setSearchTerm(searchTerm);
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
         fetchDrinks(searchTerm);
      }, 1000);
    };
  };

  const debounceSearch = useMemo(() => searchCocktail(), []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your cocktail</label>
          <input 
            type="text"
            name="name"
            id="name"
            onChange={debounceSearch}
            value={searchTerm}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm