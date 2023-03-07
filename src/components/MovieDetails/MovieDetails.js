import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsContent from '../DetailsContent/DetailsContent';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import AditionalInformation from '../AditionalInformation/AditionalInformation';

const MovieDetails = ({ api }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      api(movieId)
        .then((res) => {
          setMovie(res);
          setGenres(res.genres);
          setCompanies(res.production_companies);
        })
        .catch((err) => setErr((err.message = 'Невідома помилка:(')))
        .finally(() => setLoading(false));
    }, 100);
  }, [api, movieId]);

  return (
    <>
      {loading ? (
        <AiOutlineLoading3Quarters className="loading" />
      ) : (
        <>
          <DetailsContent
            movie={movie}
            genres={genres}
            companies={companies}
          >
            <AditionalInformation />
          </DetailsContent>
        </>
      )}
      {err && <h2 className="text-center">{err}</h2>}
    </>
  );
};

export default MovieDetails;
