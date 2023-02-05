import { Route, Routes } from "react-router-dom"
import { Layout } from "./Layout/Layout"
import { Home } from "pages/Home/Home"
import { Movies } from "pages/Movies/Movies"
import { MovieDetails } from "pages/MovieDetails/MovieDetails"

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="movies" element={<Movies />}>
                        <Route path=":movieId" element={ <MovieDetails />}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};