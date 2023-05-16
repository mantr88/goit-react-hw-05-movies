import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  ListContainer,
  MovieName,
  StyledLink,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ListContainer>
      {movies.map(({ id, poster_path, title }) => (
        <CardWrapper key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
            <MovieName>{title}</MovieName>
          </StyledLink>
        </CardWrapper>
      ))}
    </ListContainer>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
