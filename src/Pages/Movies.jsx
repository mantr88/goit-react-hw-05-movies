import { useState, useEffect } from 'react';
import { FcSearch } from 'react-icons/fc';
import { fetchMoviesByQueryStr } from 'services/api';
import { CircleLoader } from 'react-spinners';
import MoviesList from 'components/MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const searchMovieString = searchParams.get('query');

  useEffect(() => {
    const getData = setTimeout(() => {
      const searchMovies = async () => {
        try {
          if (searchMovieString === '') {
            setMovies([]);
            return;
          }
          setIsLoading(true);
          const { results } = await fetchMoviesByQueryStr(searchMovieString);
          // console.log(results);
          setMovies(results);
        } catch (error) {
          throw new Error(`😢Sorry, it is error. Your error 👉 ${error}`);
        } finally {
          setIsLoading(false);
        }
      };
      searchMovies();
    }, 500);

    return () => clearTimeout(getData);
  }, [searchMovieString]);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setQuery(e.currentTarget.elements.query.value);
  // };

  return (
    <main>
      <FcSearch />
      <input
        type="text"
        name="query"
        onChange={evt => setSearchParams({ query: evt.target.value })}
        value={searchMovieString}
      ></input>
      {/* <button type="submit">
          <FcSearch />
        </button> */}
      <div>{isLoading && <CircleLoader color="#d66b36" />}</div>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
