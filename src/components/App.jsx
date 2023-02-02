import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="events" element={<div>Movies</div>} />
        </Route>
      </Routes>
    </div>
  );
};
