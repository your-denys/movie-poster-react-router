import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {};
axios.defaults.params['api_key'] = '88c3c30b7f6ad8a3be538fd00144603a';
axios.defaults.params['language'] = 'uk-UA';

const trendingMoviesApi = async ({
  mediaType = 'all',
  timeWindow = 'day',
}) => {
  try {
    return await axios
      .get(`/trending/${mediaType}/${timeWindow}`)
      .then((res) => res.data.results);
  } catch (error) {
    console.log((error.message = 'some error with tranding Api'));
  }
};

const searchApi = async ({ query, page }) => {
  try {
    return await axios
      .get(`search/multi`, {
        params: { query: query, page: page, language: 'uk-UA' },
      })
      .then((res) => res.data);
  } catch (error) {
    console.log((error.message = 'some error with search Api'));
  }
};

const movieDetailsApi = async (movieId) => {
  try {
    return await axios
      .get(`movie/${movieId}`)
      .then((res) => res.data);
  } catch (e) {
    console.log((e.message = 'some error with details Api'));
  }
};

const TVDetailsApi = async (tvId) => {
  try {
    return await axios.get(`tv/${tvId}`).then((res) => res.data);
  } catch (e) {
    console.log((e.message = 'some error with details Api'));
  }
};

const movieCreditsApi = async (movieId) => {
  try {
    return await axios
      .get(`movie/${movieId}/credits`)
      .then((res) => res.data.cast);
  } catch (e) {
    console.log((e.message = 'some error with Credits Api'));
  }
};

const tvCreditsApi = async (movieId) => {
  try {
    return await axios
      .get(`tv/${movieId}/credits`)
      .then((res) => res.data.cast);
  } catch (e) {
    console.log((e.message = 'some error with Credits Api'));
  }
};
const movieSimilarsApi = async (movieId) => {
  try {
    return await axios
      .get(`movie/${movieId}/similar`)
      .then((res) => res.data.results);
  } catch (e) {
    console.log((e.message = 'some error with Credits Api'));
  }
};

const tvSimilarsApi = async (movieId) => {
  try {
    return await axios
      .get(`tv/${movieId}/similar`)
      .then((res) => res.data.results);
  } catch (e) {
    console.log((e.message = 'some error with Credits Api'));
  }
};

const getMovieVideos = async ({ movieId }) => {
  try {
    return await axios
      .get(`movie/${movieId}/videos`)
      .then((res) => res.data.results);
  } catch (e) {
    console.log((e.message = 'some error with Reviews Api'));
  }
};
const getTvVideos = async ({ movieId, language }) => {
  try {
    return await axios
      .get(`tv/${movieId}/videos`, { params: { language: language } })
      .then((res) => res.data.results);
  } catch (e) {
    console.log((e.message = 'some error with Reviews Api'));
  }
};

const getMoviePopular = async ({ page }) => {
  try {
    return await axios
      .get(`movie/popular`, { params: { page: page } })
      .then((res) => res.data);
  } catch (e) {
    console.log((e.message = 'some error with Reviews Api'));
  }
};
const getTVPopular = async ({ page }) => {
  try {
    return await axios
      .get(`tv/popular`, { params: { page: page } })
      .then((res) => res.data);
  } catch (e) {
    console.log((e.message = 'some error with Reviews Api'));
  }
};

export {
  trendingMoviesApi,
  searchApi,
  movieDetailsApi,
  movieCreditsApi,
  getMovieVideos,
  movieSimilarsApi,
  getMoviePopular,
  getTVPopular,
  TVDetailsApi,
  tvCreditsApi,
  getTvVideos,
  tvSimilarsApi,
};
