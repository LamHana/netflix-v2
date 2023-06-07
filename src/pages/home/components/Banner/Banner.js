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
function Banner({ handleOnClickMovie }) {
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [showThumbnail, setShowThumbnail] = useState(false);
  const playerRef = useRef(null);

  const handleFullscreen = () => {
    const videoElement = playerRef.current?.getInternalPlayer();
    if (videoElement) {
      console.log(videoElement);
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
    }
  };

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
          ref={playerRef}
          url={trailerURL}
          width="100%"
          height="100%"
          playing={true}
          controls={false}
          autoPlay={true}
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
            <button onClick={handleFullscreen}>
              <PlayArrowIcon /> <Blank />
              Play
            </button>
            <button onClick={(e) => handleOnClickMovie(e, movie.id)}>
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
