 import { useFetchMovie } from 'hooks/useFetchMovie';
//  import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  const movie = useFetchMovie();
  return (
    movie && (
        <div>
        <h2>{movie.title}</h2>
        <img src={movie.poster_path} alt={movie.title} />
        <p>{movie.overview}</p>
        <p>{movie.genre}</p>

    
        </div>
    )
  )
    
    
  
 
}
