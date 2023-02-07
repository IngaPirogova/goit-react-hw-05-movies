import { useState, useEffect } from 'react';
import { fetchTrandingMovies } from 'services/api';
import { Outlet } from 'react-router-dom';
import { HomeList, HomeLink } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrandingMovies().then(setMovies);
  }, []);

  console.log(movies);
  return (
    <>
      <h2 style={{ marginLeft: '20px' }}>Trending today</h2>
      <HomeList>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <HomeLink to={`/movies/${id}`}>
              {name}
              <p>{title}</p>
            </HomeLink>
          </li>
        ))}
      </HomeList>
      <Outlet />
    </>
  );
};
