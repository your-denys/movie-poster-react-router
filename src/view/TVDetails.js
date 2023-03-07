import React from 'react';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import { TVDetailsApi } from '../services/api';

const TVDetails = () => {
  return (
    <div className="margin-body">
      <MovieDetails api={TVDetailsApi} />
    </div>
  );
};

export default TVDetails;
