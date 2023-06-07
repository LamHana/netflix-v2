import { get } from "./ApiCaller";

const API_KEY = "05b5815f816b01cd4c994616c31b146c";
console.log(API_KEY);
const requests = {
  fetchTrendingMovies: async () => {
    const endpoint = `/trending/movie/week?api_key=${API_KEY}`;
    return await get(endpoint, {}, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchNetflixOriginals: async () => {
    const endpoint = `/discover/tv`;
    return await get(endpoint, { api_key: API_KEY, with_networks: 213 }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchTopRatedMovies: async () => {
    const endpoint = `/movie/top_rated`;
    return await get(
      endpoint,
      { api_key: API_KEY, language: "en-US", page: 1 },
      {}
    )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchActionMovies: async () => {
    const endpoint = `/discover/movie`;
    return await get(endpoint, { api_key: API_KEY, with_genres: 28 }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchComedyMovies: async () => {
    const endpoint = `/discover/movie`;
    return await get(endpoint, { api_key: API_KEY, with_genres: 35 }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchTVMovies: async () => {
    const endpoint = `/discover/movie`;
    return await get(endpoint, { api_key: API_KEY, with_genres: 10770 }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchHorrorMovies: async () => {
    const endpoint = `/discover/movie`;
    return await get(endpoint, { api_key: API_KEY, with_genres: 27 }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchRomanceMovies: async () => {
    const endpoint = `/discover/movie`;
    return await get(endpoint, { api_key: API_KEY, with_genres: 10749 }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchDocumentaries: async () => {
    const endpoint = `/discover/movie`;
    return await get(endpoint, { api_key: API_KEY, with_genres: 99 }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  movieDetail: async (movieId) => {
    console.log(movieId);
    const endpoint = `/movie/${movieId}`;
    return await get(endpoint, { api_key: API_KEY }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  movieVideos: async (movieId) => {
    console.log(movieId);
    const endpoint = `/movie/${movieId}/videos`;
    return await get(endpoint, { api_key: API_KEY }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
};

export default requests;
