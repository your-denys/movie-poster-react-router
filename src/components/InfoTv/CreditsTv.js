import React, { useEffect, useState } from 'react';
import { tvCreditsApi } from '../../services/api';
import { useParams } from 'react-router-dom';
import CreditsList from '../CreditsList/CreditsList';

const CreditsTv = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      tvCreditsApi(movieId)
        .then((res) => {
          setCredits(res);
        })
        .then(() => setLoading(false));
    }, 500);
  }, [movieId]);

  return <CreditsList credits={credits} loading={loading} />;
};

export default CreditsTv;
