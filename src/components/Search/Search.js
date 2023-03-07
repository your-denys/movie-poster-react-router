import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import { searchApi } from '../../services/api';
import MovieList from '../MovieList/MovieList';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Paginaton from '../Pagination/Paginaton';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  useEffect(() => {
    if (query !== '') {
      setLoading(true);
      searchApi({ query, page }).then((res) => {
        setMovies(res.results);
        setTotalPages(res.total_pages);
        setLoading(false);
        setSearchParams({ query: query });
      });
    }
  }, [page, query, setSearchParams]);

  const handleQuery = (query) => {
    setQuery(query);
  };

  return (
    <div className="container">
      <SearchForm query={handleQuery} />
      {loading ? (
        <AiOutlineLoading3Quarters className="loading" />
      ) : (
        <MovieList trendMovies={movies} letter={/[а-яa-z]/} />
      )}
      {query && !movies.length && (
        <h2 className="text-center">
          {query[0].toUpperCase() + query.slice(1)} не знайдено
        </h2>
      )}
      {query && movies.length > 0 && (
        <Paginaton
          page={+page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default Search;
