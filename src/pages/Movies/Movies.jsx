import { useEffect, useState } from 'react';
import { fetchTrandingMovies } from 'services/api';
import { Link, Outlet } from 'react-router-dom';
import { MovieItem } from './Movies.styled';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrandingMovies().then(setMovies);
  }, []);

  console.log(movies);
  return (
    <>
      <ul>
        {movies.map(({ id, title, name }) => (
          <MovieItem key={id}>
            <Link to={id}>{title}</Link>
            <Link to={id}>{name}</Link>
          </MovieItem>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
