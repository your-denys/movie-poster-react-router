import React, { useEffect, useState } from 'react';
import { movieCreditsApi } from '../../services/api';
import { useParams } from 'react-router-dom';
import CreditsList from '../CreditsList/CreditsList';

const CreditsMovie = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      movieCreditsApi(movieId)
        .then((res) => setCredits(res))
        .then(() => setLoading(false));
    }, 500);
  }, [movieId]);

  return <CreditsList credits={credits} loading={loading} />;
};

export default CreditsMovie;
