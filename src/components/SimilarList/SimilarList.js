import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import './SimilarList.css';

const SimilarList = ({ movie, loading, type }) => {
  const noImg =
    'https://www.freeiconspng.com/uploads/no-image-icon-6.png';

  const pathname = useLocation();
  console.log(pathname);

  return (
    <div className="similar mt-4 container">
      {loading ? (
        <AiOutlineLoading3Quarters className="loading" />
      ) : (
        <ul className=" row list-group list-group-horizontal">
          {movie.length > 1 ? (
            movie.map(
              (movie, i) =>
                i < 12 && (
                  <li
                    key={movie.id}
                    className="col-md-4 col-sm-6 col-xl-3 list-group-item mb-4 similar-list"
                  >
                    <div className="wrapper-similar">
                      <img
                        className="img-smilar"
                        src={
                          movie.poster_path
                            ? `//image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`
                            : noImg
                        }
                        alt={movie.name}
                      />
                      <NavLink
                        to={`../../${type}/${movie.id}`}
                        className="h5 similar-name"
                      >
                        {movie.title || movie.name}
                      </NavLink>
                    </div>
                  </li>
                )
            )
          ) : (
            <p className="h4 text-center">Дані відсутні</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default SimilarList;
