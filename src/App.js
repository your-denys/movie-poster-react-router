import AppBar from './components/AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const HomePage = lazy(() =>
  import('./view/HomePage' /* webpackChunkName: "home-view" */)
);
const MoviePage = lazy(() =>
  import('./view/MoviePage' /* webpackChunkName: "movie-view" */)
);
const TVPage = lazy(() =>
  import('./view/TVPage' /* webpackChunkName: "tv-view" */)
);
const TVDetails = lazy(() =>
  import('./view/TVDetails' /* webpackChunkName: "tv-detals" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './view/MovieDetailsPage' /* webpackChunkName: "movie-details" */
  )
);
const CreditsMovie = lazy(() =>
  import(
    './components/InfoMovies/CreditsMovie' /* webpackChunkName: "movie-credits" */
  )
);
const CreditsTv = lazy(() =>
  import(
    './components/InfoTv/CreditsTv' /* webpackChunkName: "tv-credits" */
  )
);
const TrailerMovie = lazy(() =>
  import(
    './components/InfoMovies/TrailerMovie' /* webpackChunkName: "movie-trailer" */
  )
);
const TrailerTv = lazy(() =>
  import(
    './components/InfoTv/TrailerTv' /* webpackChunkName: "tv-trailer" */
  )
);
const SimilarMovie = lazy(() =>
  import(
    './components/InfoMovies/SimilarMovie' /* webpackChunkName: "movie-similar" */
  )
);
const SimilarTv = lazy(() =>
  import(
    './components/InfoTv/SimilarTv' /* webpackChunkName: "tv-similar" */
  )
);
const SearchPage = lazy(() =>
  import('./view/SearchPage.js' /* webpackChunkName: "search" */)
);

function App() {
  return (
    <div>
      <AppBar />
      <Suspense
        fallback={<AiOutlineLoading3Quarters className="loading" />}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route
            path="movies/:movieId/*"
            element={<MovieDetailsPage />}
          >
            <Route path="credits" element={<CreditsMovie />} />
            <Route path="trailer" element={<TrailerMovie />} />
            <Route path="similar" element={<SimilarMovie />} />
          </Route>
          <Route path="series" element={<TVPage />} />
          <Route path="series/:movieId/*" element={<TVDetails />}>
            <Route path="credits" element={<CreditsTv />} />
            <Route path="trailer" element={<TrailerTv />} />
            <Route path="similar" element={<SimilarTv />} />
          </Route>
          <Route path="search" element={<SearchPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
