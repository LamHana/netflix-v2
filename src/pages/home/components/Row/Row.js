import React, { useState } from "react";
import {
  Container,
  Movie,
  Poster,
  SliderWrapper,
  Title,
  StyledBackArrowIcon,
  StyledNextArrowIcon,
} from "./Row.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Row({ title, fetchURL }) {
  const [movie, setMovie] = useState([]);
  const getMovieData = async () => {
    const req = await fetchURL();
    setMovie(req.data.results);
  };
  getMovieData();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <Container>
      <Title>{title}</Title>
      <SliderWrapper
        prevArrow={<StyledBackArrowIcon />}
        nextArrow={<StyledNextArrowIcon />}
        {...settings}
      >
        {movie.map((item) => {
          return (
            <Movie>
              <Poster
                src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
              />
            </Movie>
          );
        })}
      </SliderWrapper>
    </Container>
  );
}

export default Row;
