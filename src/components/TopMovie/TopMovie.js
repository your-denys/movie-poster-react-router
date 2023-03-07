import React, { useState } from 'react';
import { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import Paginaton from '../Pagination/Paginaton';

const TopMovie = ({ api, children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(searchParams.get('page') || 1);
  const [movie, setMovie] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    api({ page }).then((res) => {
      setMovie(res.results);
      setTotalPages(res.total_pages);
    });
    window.scrollTo(0, 0);
    setSearchParams({ page: page });
  }, [api, page, setSearchParams]);
  return (
    <>
      {page < totalPages && (
        <div>
          <div className="container main-content">
            <div>
              <h3 className=" font-weight-bold m-4 mt-5 text-uppercase text-center">
                {children}
                <hr />
              </h3>
              <MovieList trendMovies={movie} />
            </div>
          </div>
          <Paginaton
            page={+page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </>
  );
};

export default TopMovie;
