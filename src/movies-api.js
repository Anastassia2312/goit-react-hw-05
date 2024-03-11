import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", {
    params: {
      language: "en",
      api_key: "d12fdb6de6294de2522a94ea693f302d",
    },
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTJmZGI2ZGU2Mjk0ZGUyNTIyYTk0ZWE2OTNmMzAyZCIsInN1YiI6IjY1ZWMzM2FhOTQ0YTU3MDE2NGJlNmMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lu-QU6jwYaUZnU3BHNbu8C665m_Hb84pqaZk_knFEpk",
    },
  });
  return response.data.results;
};

export const getSearchingMovies = async (searchQuery) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: searchQuery,
      language: "en",
      api_key: "d12fdb6de6294de2522a94ea693f302d",
    },
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTJmZGI2ZGU2Mjk0ZGUyNTIyYTk0ZWE2OTNmMzAyZCIsInN1YiI6IjY1ZWMzM2FhOTQ0YTU3MDE2NGJlNmMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lu-QU6jwYaUZnU3BHNbu8C665m_Hb84pqaZk_knFEpk",
    },
  });
  return response.data.results;
};

export const getMoviesById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      language: "en",
      api_key: "d12fdb6de6294de2522a94ea693f302d",
    },
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTJmZGI2ZGU2Mjk0ZGUyNTIyYTk0ZWE2OTNmMzAyZCIsInN1YiI6IjY1ZWMzM2FhOTQ0YTU3MDE2NGJlNmMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lu-QU6jwYaUZnU3BHNbu8C665m_Hb84pqaZk_knFEpk",
    },
  });
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      language: "en",
      api_key: "d12fdb6de6294de2522a94ea693f302d",
    },
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTJmZGI2ZGU2Mjk0ZGUyNTIyYTk0ZWE2OTNmMzAyZCIsInN1YiI6IjY1ZWMzM2FhOTQ0YTU3MDE2NGJlNmMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lu-QU6jwYaUZnU3BHNbu8C665m_Hb84pqaZk_knFEpk",
    },
  });
  return response.data.results;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      language: "en",
      api_key: "d12fdb6de6294de2522a94ea693f302d",
    },
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTJmZGI2ZGU2Mjk0ZGUyNTIyYTk0ZWE2OTNmMzAyZCIsInN1YiI6IjY1ZWMzM2FhOTQ0YTU3MDE2NGJlNmMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lu-QU6jwYaUZnU3BHNbu8C665m_Hb84pqaZk_knFEpk",
    },
  });
  return response.data.results;
};
