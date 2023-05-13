import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      <div>MovieDetails</div>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
