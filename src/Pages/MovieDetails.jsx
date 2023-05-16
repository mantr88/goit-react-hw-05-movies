import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import { CircleLoader } from 'react-spinners';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import {
  LinkInfo,
  LinkInfoWrap,
  Wrapper,
} from 'components/MovieInfo/MovieInfo.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backRef = location.state?.from ?? '/';

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const results = await fetchMovieById(movieId);
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
      {movie.length !== 0 && (
        <Wrapper>
          <MovieInfo movie={movie} />
          <h4>Additional information</h4>
          <LinkInfoWrap>
            <LinkInfo to="cast" state={{ from: backRef }}>
              Cast
            </LinkInfo>
            <LinkInfo to="reviews" state={{ from: backRef }}>
              Reviews
            </LinkInfo>
          </LinkInfoWrap>
        </Wrapper>
      )}
      <Outlet />
    </main>
  );
};

export default MovieDetails;
