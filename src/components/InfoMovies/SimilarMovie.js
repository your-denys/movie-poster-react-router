import React, { useEffect, useState } from 'react';
import { movieSimilarsApi } from '../../services/api';
import { useParams } from 'react-router-dom';
import SimilarList from '../SimilarList/SimilarList';

const SimilarMovie = () => {
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      movieSimilarsApi(movieId)
        .then((res) => {
          setMovie(res);
        })
        .then(() => setLoading(false));
    }, 500);
  }, [movieId]);

  return (
    <SimilarList movie={movie} loading={loading} type={'movies'} />
  );
};

export default SimilarMovie;
