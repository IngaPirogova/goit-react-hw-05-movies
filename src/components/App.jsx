import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/Home/Home';
import Events from 'pages/Events/Events';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index="home" element={<Home />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </div>
  );
};
