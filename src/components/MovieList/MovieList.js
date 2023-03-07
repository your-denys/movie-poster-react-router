import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ trendMovies, link = '', letter =  /[А-Яа-я]/}) => {

  const noImg =
    'https://www.freeiconspng.com/uploads/no-image-icon-6.png';

  return (
    <>
      <ul className="row card-wrapper">
        {trendMovies.map(
          (movie) =>
            letter.test(movie.overview) && (
              <li
                key={movie.id}
                className="  card col-md-4 col-sm-6 col-xl-3 card-item mb-5"
              >
                <img
                  className="card-img"
                  src={
                    movie.poster_path
                      ? `//image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`
                      : noImg
                  }
                  alt={movie.title || movie.name}
                />
                <div className="card-body">
                  {!movie.media_type && (
                    <Link
                      to={`${link}${movie.id}`}
                      className="h4 card-title text-align-center mb-3"
                    >
                      {movie.title || movie.name}
                    </Link>
                  )}
                  {movie.media_type && (
                    <Link
                      to={
                        movie.media_type === 'movie'
                          ? `../movies/${movie.id}`
                          : `../series/${movie.id}`
                      }
                      className="h4 card-title text-align-center mb-3"
                    >
                      {movie.title || movie.name}
                    </Link>
                  )}
                  <hr />
                  <p className="card-text">{movie.overview}</p>
                </div>
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default MovieList;
