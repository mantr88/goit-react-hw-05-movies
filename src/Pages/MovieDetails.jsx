import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import { CircleLoader } from 'react-spinners';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backRef = location.state?.from ?? '/movies';

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const results = await fetchMovieById(movieId);
        console.log(results);
        setMovie(results);
      } catch (error) {
        throw new Error(`😢Sorry, it is error. Your error 👉 ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <main>
      {isLoading && <CircleLoader color="#d66b36" />}
      <Link to={backRef}>👈Back to movies list👈</Link>
      <MovieInfo movie={movie} />
      <h4>Additional information</h4>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
