import React, { useState } from "react";
import {
  Backdrop,
  BannerContent,
  Blank,
  Container,
  LikeIcon,
  MovieButton,
  MovieName,
  MyAddIcon,
  Video,
  Wrapper,
} from "./MovieBanner.styled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
function MovieBanner({ movie, url, trailer }) {
  console.log(movie);
  const [showThumbnail, setShowThumbnail] = useState(false);

  const handleVideoEnd = () => {
    setShowThumbnail(true);
  };
  return (
    <Container
      url={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
    >
      {trailer != "" ? (
        showThumbnail ? (
          <Backdrop />
        ) : (
          <Video
            url={url}
            width="100%"
            height="100%"
            playing={true}
            controls={false}
            autoPlay={true}
            muted={true}
            onEnded={handleVideoEnd}
          />
        )
      ) : (
        <Backdrop />
      )}
      <Wrapper>
        <BannerContent>
          <MovieName>
            {movie?.name || movie?.title || movie?.original_name}
          </MovieName>
          <MovieButton>
            <button>
              <PlayArrowIcon /> <Blank />
              Play
            </button>
            <MyAddIcon />
            <LikeIcon />
          </MovieButton>
        </BannerContent>
      </Wrapper>
    </Container>
  );
}

export default MovieBanner;
