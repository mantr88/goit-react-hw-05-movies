export const MovieInfo = ({ movie }) => {
  console.log(movie);
  const { title, poster_path, vote_average, overview, genres } = movie;
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>User Score: {vote_average}</p>
        <p>Overview: {overview}</p>
        <p>Geners: {genres.map(gener => gener.name).join(', ')}</p>
      </div>
    </div>
  );
};
