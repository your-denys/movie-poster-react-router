import { useState, useEffect } from 'react';
import { trendingMoviesApi } from '../../services/api';
import './TrendingList.css';
import { useSearchParams } from 'react-router-dom';
import Selector from '../Selector/Selector';
import MovieList from '../MovieList/MovieList';

const TrendingList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [trendMovies, setTrendMovies] = useState([]);

  const [timeWindow, setTimeWindow] = useState(
    searchParams.get('per') || 'day'
  );

  const timeOption = [
    { value: 'day', label: 'Популярні сьогодні' },
    { value: 'week', label: 'Популярні цього тижня' },
  ];

  const onSortOrderChange = (order) => {
    setTimeWindow(`${order}`);
    setSearchParams({ per: order });
  };

  useEffect(() => {
    trendingMoviesApi({ mediaType: 'movie', timeWindow })
      .then((res) => {
        setTrendMovies(res);
      })
      .catch((err) => console.log(err.message));
  }, [timeWindow]);

  return (
    <div className="container main-content">
      <div className="selector-wrapper mt-3">
        <Selector
          options={timeOption}
          onChange={onSortOrderChange}
          value={timeWindow}
        />
      </div>
      <div>
        <h3 className=" font-weight-bold m-4 text-uppercase text-center">
          {timeWindow.toLowerCase() === 'day'
            ? 'Популярні фільми сьогодні'
            : 'Популярні фільми цього тижня'}
          <hr />
        </h3>
        <MovieList trendMovies={trendMovies} link={'movies/'} />
      </div>
    </div>
  );
};

export default TrendingList;
