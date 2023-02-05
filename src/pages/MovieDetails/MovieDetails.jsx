import { useFetchMovie } from 'hooks/useFetchMovie';
import { useLocation, useNavigate } from 'react-router-dom';
  import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const movie = useFetchMovie();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    movie && (
        <>
      <div>
        <button 
        type='button'
        onClick={() => navigate(location?.state?.from ?? '/')}
        >Go back
        </button>
        <h2>{movie.title} ({movie.release_date})</h2>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={'240px'} alt="" />
       
        <p>Overview</p>
        <p>{movie.overview}</p>
        <p>User Score: {movie.vote_average * 10}%</p>
        <p>Genres</p>
        <p> {movie.genres.map(({name}) => name).join(' ')}</p>
      </div>  

      

      <hr />      
      <div>
      <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: location?.state?.from ?? '/' }}>Cast</Link>
          </li>
        
      
          <li>
            <Link to="reviews" state= {{from: location?.state?.from ?? '/'}}>Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
      </>
        
    )    
  );
};
