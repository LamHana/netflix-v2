import { get } from "./ApiCaller";

const API_KEY = "05b5815f816b01cd4c994616c31b146c";
console.log(API_KEY);
const requests = {
  fetchTrendingMovies: async () => {
    const endpoint = `/trending/movie/week`;
    return await get(endpoint, { api_key: API_KEY }, {})
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
    const endpoint = `/movie/${movieId}/videos`;
    return await get(endpoint, { api_key: API_KEY }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  getGenreList: async () => {
    const endpoint = `/genre/movie/list`;
    return await get(endpoint, { api_key: API_KEY }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  getMovieCredit: async (movieId) => {
    const endpoint = `/movie/${movieId}/credits`;
    return await get(endpoint, { api_key: API_KEY }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  getMovieSimilar: async (movieId) => {
    const endpoint = `/movie/${movieId}/similar`;
    return await get(endpoint, { api_key: API_KEY }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchPopularTVShows: async () => {
    const endpoint = `/tv/popular`;
    return await get(endpoint, { api_key: API_KEY }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchTopRatedTVShows: async () => {
    const endpoint = `/tv/top_rated`;
    return await get(endpoint, { api_key: API_KEY }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchOnTheAirTVShows: async () => {
    const endpoint = `/tv/on_the_air`;
    return await get(endpoint, { api_key: API_KEY }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchAiringTodayTVShows: async () => {
    const endpoint = `/tv/airing_today`;
    return await get(endpoint, { api_key: API_KEY }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchPopularMovies: async () => {
    const endpoint = `/movie/popular`;
    return await get(endpoint, { api_key: API_KEY }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchNowPlayingMovies: async () => {
    const endpoint = `/movie/now_playing`;
    return await get(endpoint, { api_key: API_KEY }, {})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  fetchUpcomingMovies: async () => {
    const endpoint = `/movie/upcoming`;
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
