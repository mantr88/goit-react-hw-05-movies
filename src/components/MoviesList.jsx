import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  console.log(movies);
  if (movies.length === 0) {
    return <div>Enter search query, please👆</div>;
  }
  return (
    <ul>
      {movies.map(movie => (
        <Link to={`${movie.id}`}>
          <li key={movie.id}>{movie.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;
