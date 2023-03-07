import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';
import './SearchForm.css';

const SearchForm = ({ query }) => {
  const [value, setValue] = useState('');

  const handlerInput = (e) => {
    setValue(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.warn('Введіть назву', {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    query(value);
    setValue('');
  };

  return (
    <>
      <div className="Searchbar">
        <form className="SearchForm" onSubmit={handlerSubmit}>
          <input
            placeholder="Що будемо шукати?"
            onChange={handlerInput}
            className="SearchForm-input"
            value={value}
            name={value}
          />
          <button type="submit" className="SearchForm-button">
            <FiSearch size="25" />
          </button>
        </form>
      </div>
      <hr />
    </>
  );
};

export default SearchForm;
