import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieVideos } from '../../services/api';
import Trailer from '../Trailer/Trailer';

const TrailerMovie = () => {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getMovieVideos({ movieId, language: 'uk-UA' || 'en-US' })
        .then((res) => {
          setTrailer(res);
        })
        .then(() => setLoading(false));
    }, 500);
  }, [movieId]);

  return <Trailer loading={loading} trailer={trailer} />;
};

export default TrailerMovie;
