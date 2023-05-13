import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <main>
      <form>
        <input type="text"></input>
        <button type="submit"></button>
      </form>
      <div>
        {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5', 'movie-6'].map(
          movie => {
            return (
              <ul>
                <li>
                  <Link key={movie} to={`${movie}`}>
                    {movie}
                  </Link>
                </li>
              </ul>
            );
          }
        )}
      </div>
    </main>
  );
};

export default Movies;
