import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsOfMovie } from 'services/api';
import { CircleLoader } from 'react-spinners';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchReviewsOfMovie(movieId);
        console.log(results);
        setReviews(results);
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
      <h3>Reviews</h3>
      <div>{isLoading && <CircleLoader color="#d66b36" />}</div>
      {reviews.length !== 0 ? (
        reviews.map(item => (
          <li key={item.id}>
            <h5>{item.author}</h5>
            <p>{item.content}</p>
          </li>
        ))
      ) : (
        <div>Sorry, there are no reviews yet😿</div>
      )}
    </div>
  );
};

export default Reviews;
