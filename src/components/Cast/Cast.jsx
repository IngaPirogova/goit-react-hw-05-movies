import { useState, useEffect } from 'react';
import { fetchMovieCastById } from 'services/api';
import { useParams } from 'react-router-dom';

const DEFAULT_FOTO =
  'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar-300x300.png';

export const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();  
   console.log(credits);

  useEffect(() => {
    fetchMovieCastById(movieId).then(setCredits);
  }, [movieId]);

  if (credits.length === 0) {
    return <h3>There is no casts</h3>;
  } else {
    return (
      <div>
        <ul>
          {credits.cast &&
            credits.cast.map(({ id, character, name, profile_path }) => (
              <li key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    width={150}
                    alt={name}
                  />
                ) : (
                  <img src={DEFAULT_FOTO} alt={''} width={150} height={225} />
                )}
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
};
