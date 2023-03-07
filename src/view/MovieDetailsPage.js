// import AditionalInformation from '../components/AditionalInformation/AditionalInformation';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import { movieDetailsApi } from '../services/api';

const MovieDetailsPage = () => {
  return (
    <div className="margin-body">
      <MovieDetails api={movieDetailsApi} />
      {/* <AditionalInformation /> */}
    </div>
  );
};

export default MovieDetailsPage;
