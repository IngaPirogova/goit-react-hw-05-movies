import axios from 'axios';

const API_KEY = '645002417e61fac3d7b9bfd937ca50a9';
const BASE_URL = `https://api.themoviedb.org/3/`;

export async function fetchTrandingMovies() {
  try {
    const res = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieById(id) {
  try {
    const res = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US `
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieCastById(id) {
  try {
    const res = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US `
    );
    return res.data.cast;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieReviewById(id) {
  try {
    const res = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function searchMoviesFetch(query) {
  try {
    const res = await axios.get(
      `${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false `
    );
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
}
