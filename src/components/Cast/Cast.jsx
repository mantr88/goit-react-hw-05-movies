import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditOfMovie } from 'services/api';
import { CircleLoader } from 'react-spinners';
import { CastItem, CastWrap } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchCreditOfMovie(movieId);
        // console.log(cast);
        setCast(cast);
      } catch (error) {
        throw new Error(`😢Sorry, it is error. Your error 👉 ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <div>
      <div>{isLoading && <CircleLoader color="#d66b36" />}</div>
      <CastWrap>
        {cast.map(({ profile_path, cast_id, name, character }) => (
          <CastItem key={cast_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : 'https://previews.123rf.com/images/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-photo-not-available-icon-isolated-on-white-background-vector-illustration.jpg'
              }
              alt={name}
              width="240"
            />
            <div>
              <h4>{name}</h4>
              <p>Character: {character}</p>
            </div>
          </CastItem>
        ))}
      </CastWrap>
    </div>
  );
};

export default Cast;
