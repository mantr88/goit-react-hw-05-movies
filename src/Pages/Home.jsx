import { useEffect, useState } from 'react';
import { fetchPopularMovies } from 'services/api';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const popularMovies = async () => {
      try {
        const { results } = await fetchPopularMovies();
        console.log(results);
        setPopularMovies(results);
      } catch (error) {
        throw new Error(`😢Sorry, it is error. Your error ${error}`);
      }
    };
    popularMovies();
  }, []);

  return (
    <main>
      <h1>Popular movies</h1>
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
