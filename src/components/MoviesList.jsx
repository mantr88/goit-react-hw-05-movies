import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  if (movies.length === 0) {
    return <div>Enter search query, please👆</div>;
  }

  return (
    <ul>
      {movies.map(movie => (
        <Link to={`${movie.id}`} state={{ from: location }}>
          <li key={movie.id}>{movie.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;
