import React, { useState } from "react";
import { Container, Movie, Poster, SliderWrapper, Title } from "./Row.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
      <SliderWrapper {...settings}>
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
