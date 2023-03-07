import React from 'react';
import TopMovie from '../components/TopMovie/TopMovie';
import { getMoviePopular } from '../services/api';

const MoviePage = () => {
  return (
    <div className="margin-body">
      <TopMovie api={getMoviePopular}>Найкращі фільми</TopMovie>
    </div>
  );
};

export default MoviePage;
