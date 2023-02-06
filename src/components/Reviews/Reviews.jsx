import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewById } from 'services/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  console.log(reviews);

  useEffect(() => {
    fetchMovieReviewById(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length === 0) {
    return <h3>There is no reviews</h3>;
  } else {
    return (
      <div>
        <ul>
          {reviews &&
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
};
