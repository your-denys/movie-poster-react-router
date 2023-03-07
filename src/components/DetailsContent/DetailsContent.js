import './DetailsContent.css';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

const DetailsContent = ({ movie, genres, companies, children }) => {
  const noImg =
    'https://www.freeiconspng.com/uploads/no-image-icon-6.png';
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="wrapper ">
        <Button
          className="mb-4"
          onClick={goBack}
          variant="outline-dark"
        >
          <BiArrowBack /> Назад
        </Button>
        {movie && (
          <>
            <div className="movie-item__main-block">
              <div className="movie-item__img">
                <img
                  className="img-title"
                  src={
                    movie.poster_path
                      ? `//image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`
                      : noImg
                  }
                  alt={movie.title || movie.name}
                />
                <ul className=" genres-list mt-2 list-group list-group-horizontal justify-content-center">
                  {genres.map((genre) => (
                    <li key={genre.id} className="list-group-item">
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="movie-item__details">
                <div className="mb-2 pt-3">
                  <div className="d-flex justify-content-between ">
                    <p className="h3 movie-item__title">
                      {movie.title || movie.name}
                    </p>
                    {!!movie.vote_average === true && (
                      <p className="h4 mr-5 rate">
                        {Math.trunc(movie.vote_average * 10) / 10}/10
                      </p>
                    )}
                  </div>
                  <p>{movie.tagline || ''}</p>
                  <hr />
                </div>
                {movie.overview && (
                  <div className="overview-item ">
                    <p className="h4">Опис</p>
                    <p>{movie.overview}</p>
                  </div>
                )}
                {movie.runtime > 0 && (
                  <div className="overview-item">
                    <p className="h5">Тривалість</p>
                    <p>{movie.runtime} хв.</p>
                  </div>
                )}
                {movie.number_of_seasons && (
                  <div className="overview-item">
                    <p className="h5">Кількість сезонів</p>
                    <p>{movie.number_of_seasons}</p>
                  </div>
                )}
                {movie.number_of_episodes && (
                  <div className="overview-item">
                    <p className="h5">Кількість епізодів</p>
                    <p>{movie.number_of_episodes}</p>
                  </div>
                )}
                {movie.first_air_date && (
                  <div className="overview-item">
                    <p className="h5">Вихід 1 епізоду</p>
                    <p>{movie.first_air_date.replace(/-/g, '.')}</p>
                  </div>
                )}
                {movie.release_date && (
                  <div className="overview-item">
                    <p className="h5">Дата релізу</p>
                    <p>{movie.release_date.replace(/-/g, '.')}</p>
                  </div>
                )}
                {!!companies.length && (
                  <div className="overview-item">
                    <p className="h5">Виробник</p>
                    <ul>
                      {companies.map((companie) => (
                        <li
                          className="list-group-item"
                          key={companie.id}
                        >
                          {companie.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {movie.budget && movie.budget !== 0 ? (
                  <div className="overview-item">
                    <p className="h5">Бюджет</p>
                    <p>{movie.budget}$</p>
                  </div>
                ) : null}
              </div>
            </div>
            <div>{children}</div>
          </>
        )}
      </div>
    </>
  );
};
export default DetailsContent;
