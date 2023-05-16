import { useState, useEffect } from 'react';
import { fetchMoviesByQueryStr } from 'services/api';
import { CircleLoader } from 'react-spinners';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const searchMovieString = searchParams.get('query');

  useEffect(() => {
    const searchMovies = async () => {
      try {
        if (searchMovieString === '') {
          setMovies([]);
          return;
        }
        setIsLoading(true);
        const { results } = await fetchMoviesByQueryStr(searchMovieString);
        setMovies(results);
      } catch (error) {
        throw new Error(`😢Sorry, it is error. Your error 👉 ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    searchMovies();
  }, [searchMovieString]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const searchQueryStr = evt.target.elements.query.value;
    const searchQueryStrTrim = searchQueryStr.trim();

    setSearchParams({ query: searchQueryStrTrim });
  };

  return (
    <main>
      <SearchForm onSubmit={handleSubmit} />
      <div>{isLoading && <CircleLoader color="#d66b36" />}</div>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
