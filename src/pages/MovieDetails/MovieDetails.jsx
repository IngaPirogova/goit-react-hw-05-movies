import { useFetchMovie } from 'hooks/useFetchMovie';
// import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  const movie = useFetchMovie();
  console.log(movie);

  return (
  <div>
    test
    {/* <h3>Additional information</h3>
    <ul>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link> */}
    {/* </ul> */}
  </div>
  )
};
