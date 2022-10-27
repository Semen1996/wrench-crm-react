import iconSearch from '../images/search-white.svg';
import { useState, useEffect } from 'react';

function Search() {

  const [addresses, setAddresses] = useState([]);
  const [query, setQuery] = useState("Ленина");

  useEffect(() => {
    api();
  },[])

  // Получение данных с API
  function api() {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "254ed0752a2b77c2d5a804ef3ba444afce12347b";

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
      body: JSON.stringify({query: query})
    }

    fetch(url, options)
      .then(response => response.json())
      .then(result => setAddresses( Object.values(result.suggestions) ) )
      .catch(error => console.log("error", error));
  }


  // Получение данных при вводе в инпут
  function handleChange(evt) {
    setQuery(evt.target.value);
  }

  // При нажатии на кнопку ПОИСК
  function handleSearch() {
    if(query.length >= 3) {
      api();
    }
  }

  return (
    <div className="field">
      <h2 className="field__title">Поиск адресов</h2>
      <p className="field__subtitle">Введите интересующий вас адрес</p>
      <div className="search">
        <input className="search__input" minLength={3} onChange={handleChange} defaultValue={query} />
        <button className="search__button" onClick={handleSearch}>
          <img className="search__btn-icon" src={iconSearch} alt="иконка" />
          <p className="search__btn-text">Поиск</p>
        </button>
      </div>
      <div className="address">
        <h3 className="address__title">Адреса</h3>
        <ul className="address__list">
          {
            addresses.map((item, index) => {
              return(
                <li key={index} className="address__item">{item.value}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Search;