import { useFetchMovie } from 'hooks/useFetchMovie';
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {
  ContainerMovieDetails,
  BtnGoBack,
  InfoList,
  AddInfo,
  MovieInfo,
  HrMovieDetails,
  AddInfoLink,
  AddInfoItem,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const movie = useFetchMovie();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    movie && (
      <>
        <BtnGoBack
          type="button"
          onClick={() => navigate(location?.state?.from ?? '/')}
        >
          Go back
        </BtnGoBack>
        <ContainerMovieDetails>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={'340px'}
              alt=""
            />
          </div>
          <MovieInfo>
            <h2>
              {movie.title} ({movie.release_date})
            </h2>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <p>User Score: {movie.vote_average * 10}%</p>
            <h3>Genres</h3>
            <p> {movie.genres.map(({ name }) => name).join(' ')}</p>
          </MovieInfo>
        </ContainerMovieDetails>
        <HrMovieDetails />
        <div>
          <AddInfo>Additional information</AddInfo>
          <InfoList>
            <AddInfoItem>
              <AddInfoLink
                to="cast"
                state={{ from: location?.state?.from ?? '/' }}
              >
                Cast
              </AddInfoLink>
            </AddInfoItem>

            <AddInfoItem>
              <AddInfoLink
                to="reviews"
                state={{ from: location?.state?.from ?? '/' }}
              >
                Reviews
              </AddInfoLink>
            </AddInfoItem>
          </InfoList>
        </div>

        <HrMovieDetails />

        <Outlet />
      </>
    )
  );
};
