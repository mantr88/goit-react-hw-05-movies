import axios from 'axios';

const KEY = '01917690f0f54d5c14258bd49d6faae2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchPopularMovies = async () => {
  const { data } = await axios(`trending/movie/day?api_key=${KEY}`);
  return data;
};

export const fetchMoviesByQueryStr = async query => {
  const { data } = await axios(`search/movie?api_key=${KEY}&query=${query}`);
  return data;
};

export const fetchMovieById = async id => {
  const { data } = await axios(`movie/${id}?api_key=${KEY}`);
  return data;
};
