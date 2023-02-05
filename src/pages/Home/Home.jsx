import { useState, useEffect } from "react";
import { fetchTrandingMovies } from "services/api";
import { Link, Outlet } from "react-router-dom";


export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrandingMovies().then(setMovies);
  }, []);

  console.log(movies);
  return (
    <>
    <h2>Trending today</h2>
      <ul>
        {movies.map(({ id, title, name, poster }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}{name}
            <img src={poster} alt={title} />  
            <title>
                <h3>{title}</h3>
            </title>  
            </Link>                  
          </li>
        ))}
      </ul>
      <Outlet />
      </>
  );
};
