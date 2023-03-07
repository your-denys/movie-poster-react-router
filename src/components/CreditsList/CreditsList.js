import React from 'react';
import './CreditsList.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const CreditsList = ({ loading, credits }) => {
  const noImg =
    'https://www.freeiconspng.com/uploads/no-image-icon-6.png';

  return (
    <div className="credits container mt-4">
      {loading ? (
        <AiOutlineLoading3Quarters className="loading" />
      ) : (
        <ul className=" row list-group list-group-horizontal">
          {credits.length > 1 ? (
            credits.map(
              (credit, i) =>
                i < 12 && (
                  <li
                    key={credit.cast_id || credit.credit_id}
                    className="col-md-4 col-sm-6 col-xl-3 credit-list list-group-item mb-3"
                  >
                    <div className="wrapper-credit">
                      <img
                        className="img-credit"
                        src={
                          credit.profile_path
                            ? `//image.tmdb.org/t/p/w220_and_h330_face/${credit.profile_path}`
                            : noImg
                        }
                        alt={credit.name}
                      />
                      <div>
                        <p className="h5 actor-name">{credit.name}</p>
                        <hr />
                        <p className="text-center">
                          {' '}
                          {credit.character}
                        </p>
                      </div>
                    </div>
                  </li>
                )
            )
          ) : (
            <p className="h4 text-center">
              Список акторів недоступний
            </p>
          )}
        </ul>
      )}
    </div>
  );
};

export default CreditsList;
