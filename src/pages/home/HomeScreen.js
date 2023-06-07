import React, { useEffect } from "react";
import Nav from "../../components/nav/Nav";
import Banner from "./components/Banner/Banner";
import requests from "../../utils/movieApi";
import Row from "./components/Row/Row";
import { useState } from "react";
import MovieDetail from "./movie/MovieDetail";

function HomeScreen() {
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);
  const [movie, setMovie] = useState();
  const movieRows = [
    {
      id: 1,
      title: "Netflix Originals",
      fetchURL: requests.fetchNetflixOriginals,
    },
    {
      id: 2,
      title: "Trending Now",
      fetchURL: requests.fetchTrendingMovies,
    },
    {
      id: 3,
      title: "Romantic Favorites",
      fetchURL: requests.fetchRomanceMovies,
    },
    {
      id: 4,
      title: "Get In On the Action",
      fetchURL: requests.fetchActionMovies,
    },
    {
      id: 5,
      title: "Comedy Shows",
      fetchURL: requests.fetchComedyMovies,
    },
    {
      id: 6,
      title: "Documentaries Shows",
      fetchURL: requests.fetchDocumentaries,
    },
    {
      id: 7,
      title: "Horror Movies",
      fetchURL: requests.fetchHorrorMovies,
    },
    {
      id: 8,
      title: "TV Shows",
      fetchURL: requests.fetchTVMovies,
    },
    {
      id: 9,
      title: "Top Rated Shows",
      fetchURL: requests.fetchTopRatedMovies,
    },
  ];
  const getGenreList = async () => {
    const tmp = await requests.getGenreList();
    setList(tmp.data?.genres);
  };

  const handleOnClickMovie = async (e, id) => {
    console.log(id);
    const movieDetail = await requests.movieDetail(id);
    setMovie(movieDetail?.data);
    handleShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    getGenreList();
  }, []);

  return (
    <>
      <MovieDetail
        handleClose={handleClose}
        show={show}
        movie={movie}
        list={list}
        handleOnClickMovie={handleOnClickMovie}
      />
      <Nav />
      <Banner handleOnClickMovie={handleOnClickMovie} />
      {movieRows.map((row, index) => {
        return (
          <Row
            title={row.title}
            fetchURL={row.fetchURL}
            key={index}
            list={list}
            handleOnClickMovie={handleOnClickMovie}
          />
        );
      })}
    </>
  );
}

export default HomeScreen;
