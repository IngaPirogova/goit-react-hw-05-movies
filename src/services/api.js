import axios from "axios";

const API_KEY = '645002417e61fac3d7b9bfd937ca50a9';
const BASE_URL = `https://api.themoviedb.org/3/`;

export async function fetchTrandingMovies() {
    try{
        const res = await axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);
    return res.data.results;
     
    } catch (error) {
        console.log(error);
    }  
}

export async function fetchMovieById(id) {
    try{
        const res = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US `);
    return res.data;
     
    } catch (error) {
        console.log(error);
    }  
}

export async function fetchMovieCastById(id) {
    try{
        const res = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US `);
    return res.data;
     
    } catch (error) {
        console.log(error);
    }  
}

export async function fetchMovieReviewById(id) {
    try{
        const res = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return res.data.results;
     
    } catch (error) {
        console.log(error);
    }  
}


// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1




// const BASE_URL = `https://pixabay.com/api/`;
// const API_KEY = '31233349-657dbeb08b09bae80b555b3c4';
// const OTHER_PARAMS = '&image_type=photo&orientation=horizontal&per_page=12'

// export async function fetchResponce(searchName, page) {
//     try {
       
//         const URL = `${BASE_URL}?q=${searchName}&page=${page}&key=${API_KEY}${OTHER_PARAMS}`;
//         const response = await axios.get(URL);
//         return response.data;              
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const api = { fetchResponce };




//key 645002417e61fac3d7b9bfd937ca50a9

// https://www.themoviedb.org/settings/api


// Пример API-запроса  https://api.themoviedb.org/3/movie/550?api_key=645002417e61fac3d7b9bfd937ca50a9



// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>> 
///trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false 
///search/search-movies поиск кинофильма по ключевому слову на странице фильмов.

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US  
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
///movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
///movies/get-movie-reviews запрос обзоров для страницы кинофильма.






// import axios from "axios";

// axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
// const API_KEY = 'tIj1kC332ExvV8vs1uBAp1fasaO5ERpG';


// export async function fetchEvents() {
//     const res = await axios('events', { params: { apikey: API_KEY}});
//     return res.data._embedded.events;
// }

// export async function fetchEventsById(id) {
//     const res = await axios(`events/${id}`, { params: { apikey: API_KEY}});
//     return res.data;
// }