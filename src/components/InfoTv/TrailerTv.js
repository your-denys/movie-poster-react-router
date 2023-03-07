import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTvVideos } from '../../services/api';
import Trailer from '../Trailer/Trailer';

const TrailerTv = () => {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getTvVideos({ movieId})
        .then((res) => setTrailer(res))
        .then(() => setLoading(false));
    }, 500);
  }, [movieId]);

  return <Trailer loading={loading} trailer={trailer} />;
};

export default TrailerTv;
