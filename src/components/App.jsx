import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<div>Номе</div>}/>
          <Route path="events" element={<div>Movies</div>}/>

        </Route>
      </Routes>
    </div> 
  );
};

