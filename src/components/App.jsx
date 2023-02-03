import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/Home/Home';
import Events from 'pages/Events/Events';
import EventSubPage from 'pages/EventSubPage/EventSubPage';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index="home" element={<Home />} />
          <Route path="events" element={<Events />} >
            <Route path=':eventId' element={<EventSubPage/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
