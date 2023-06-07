import React from "react";
import Nav from "../../components/nav/Nav";
import Banner from "./components/Banner/Banner";
import requests from "../../utils/movieApi";
import Row from "./components/Row/Row";

function HomeScreen() {
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
  return (
    <>
      <Nav />
      <Banner />
      {movieRows.map((row) => {
        return <Row title={row.title} fetchURL={row.fetchURL} />;
      })}
    </>
  );
}

export default HomeScreen;
