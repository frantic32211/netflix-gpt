import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-6">
      <img
        className="object-cover"
        src={IMG_CDN_URL + posterPath}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
