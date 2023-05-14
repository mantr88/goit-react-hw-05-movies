import { useEffect, useState } from 'react';
import { fetchPopularMovies } from 'services/api';
import { CircleLoader } from 'react-spinners';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const popularMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchPopularMovies();
        // console.log(results);
        setPopularMovies(results);
      } catch (error) {
        throw new Error(`😢Sorry, it is error. Your error 👉 ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    popularMovies();
  }, []);

  return (
    <main>
      <h1>Popular movies</h1>
      {isLoading && <CircleLoader color="#d66b36" />}
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
