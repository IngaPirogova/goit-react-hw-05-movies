import { useEffect, useState } from 'react';
// import { toast } from 'react-hot-toast';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMoviesFetch } from 'services/api';
import { SearchInput, SearchList, SearchLink } from './Movies.styled';
import toast, { Toaster } from 'react-hot-toast';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState('');
  const location = useLocation();

  const searchQuery = searchParams.get('name');

  useEffect(() => {
    searchQuery && searchMoviesFetch(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleInputChange = event => {
    setName(event.target.value.toLowerCase());
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const response = await searchMoviesFetch(name);

    if (!name) {
      toast('Enter something', {
        icon: '✍',
      });
      return;
    }

    setMovies(response);
    setSearchParams(searchQuery !== '' ? { name } : {});
    //  setSearchParams({name});

    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Enter your search query"
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <SearchList>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <SearchLink to={`/movies/${id}`} state={{ from: location }}>
                <p>{title}</p>
              </SearchLink>
            </li>
          ))}
        </SearchList>
      )}
      <Toaster autoClose={2000} />
    </div>
  );
}
