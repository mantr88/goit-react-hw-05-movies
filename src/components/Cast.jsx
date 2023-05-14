import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditOfMovie } from 'services/api';
import { CircleLoader } from 'react-spinners';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchCreditOfMovie(movieId);
        console.log(cast);
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
      <h3>Cast</h3>
      <div>{isLoading && <CircleLoader color="#d66b36" />}</div>
      <ul>
        {cast.map(item => (
          <li key={item.cast_id}>
            <img src={item.profile_path} alt={item.name} width="240" />
            <h4>{item.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
