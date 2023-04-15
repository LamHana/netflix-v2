import React, { useEffect, useState } from "react";
import {
  BannerContent,
  Blank,
  Container,
  MovieButton,
  MovieDesc,
  MovieName,
  Wapper,
} from "./Banner.styled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import requests from "../../../../utils/movieApi";
function Banner() {
  const [movie, setMovie] = useState([]);

  const getMovieData = async () => {
    const request = await requests.fetchNetflixOriginals();
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
  };
  useEffect(() => {
    getMovieData();
  }, []);
  console.log(movie);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <Container
      url={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
    >
      <Wapper>
        <BannerContent>
          <MovieName>
            {movie?.original_name || movie?.title || movie?.name}
          </MovieName>
          <MovieDesc>{truncate(movie?.overview, 200)}</MovieDesc>
          <MovieButton>
            <button>
              <PlayArrowIcon /> <Blank />
              Play
            </button>
            <button>
              <InfoOutlinedIcon /> <Blank />
              More Info
            </button>
          </MovieButton>
        </BannerContent>
      </Wapper>
    </Container>
  );
}

export default Banner;
