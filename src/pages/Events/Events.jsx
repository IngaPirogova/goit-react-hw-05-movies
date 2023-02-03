import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import fetchEvents from 'services/api';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);
  console.log(events);

  return (
    <>
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <Link to={event.name}></Link>
        </li>
      ))}
    </ul>
    <Outlet />
    </>
  );
}
