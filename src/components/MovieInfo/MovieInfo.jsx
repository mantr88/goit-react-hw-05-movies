import { WrapInfo, WrapText } from './MovieInfo.styled';
import PropTypes from 'prop-types';

export const MovieInfo = ({ movie }) => {
  const { genres, title, poster_path, vote_average, overview } = movie;
  return (
    <WrapInfo>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <WrapText>
        <h1>{title}</h1>
        <p>User Score: {Math.trunc((vote_average * 100) / 10)}%</p>
        <p>Overview: {overview}</p>
        <p>
          Geners:{' '}
          {genres &&
            genres.length > 0 &&
            genres.map(genere => genere.name).join(', ')}
        </p>
      </WrapText>
    </WrapInfo>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    geners: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ),
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string,
  }).isRequired,
};
