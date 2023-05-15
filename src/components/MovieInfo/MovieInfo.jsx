import { WrapInfo, WrapText } from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  const { genres, title, poster_path, vote_average, overview } = movie;
  return (
    <WrapInfo>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <WrapText>
        <h1>{title}</h1>
        <p>User Score: {vote_average}</p>
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
