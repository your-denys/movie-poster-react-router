import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './Trailer.css';

const Trailer = ({ loading, trailer }) => {
  return (
    <div className="mt-4 mb-5">
      {loading ? (
        <AiOutlineLoading3Quarters className="loading" />
      ) : trailer.length ? (
        trailer.map((video) => (
          <div key={video.key} className="traler-wrapper mb-4">
            <iframe
              className="trailer-video"
              src={`https://www.youtube.com/embed/${video.key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))
      ) : (
        <p className="h4 text-center">Трейлер недоступний</p>
      )}
    </div>
  );
};

export default Trailer;
