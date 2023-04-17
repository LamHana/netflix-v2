import React, { useEffect, useRef, useState } from "react";
import {
  BannerContent,
  Blank,
  Container,
  MovieButton,
  MovieDesc,
  MovieName,
  Wrapper,
  Video,
  Backdrop,
} from "./Banner.styled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import requests from "../../../../utils/movieApi";
function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [showThumbnail, setShowThumbnail] = useState(false);

  const handleVideoEnd = () => {
    setShowThumbnail(true);
  };
  const getMovieData = async () => {
    const request = await requests.fetchActionMovies();
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
  };
  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieDetail = async () => {
    const videos = await requests.movieVideos(movie?.id);
    console.log(videos);
    const trailerId = videos.data.results?.find(
      (video) => video.type === "Trailer"
    ).key;
    setTrailer(trailerId);
  };
  const trailerURL = `https://www.youtube.com/watch?v=${trailer}`;
  useEffect(() => {
    if (movie?.id) {
      getMovieDetail();
    }
  }, [movie]);
  console.log(trailerURL);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <Container
      url={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
    >
      {showThumbnail ? (
        <Backdrop />
      ) : (
        <Video
          url={trailerURL}
          width="100%"
          height="100%"
          playing={true}
          controls={false}
          autoplay={true}
          muted={true}
          onEnded={handleVideoEnd}
        />
      )}
      <Wrapper>
        <BannerContent>
          <MovieName>
            {movie?.name || movie?.title || movie?.original_name}
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
      </Wrapper>
    </Container>
  );
}

export default Banner;
