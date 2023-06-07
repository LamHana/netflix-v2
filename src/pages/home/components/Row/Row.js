import React, { useEffect, useState } from "react";
import {
  Container,
  Poster,
  SliderWrapper,
  Title,
  StyledBackArrowIcon,
  StyledNextArrowIcon,
  HoverPicture,
  Movie,
  TopHover,
  BottomHover,
  Text,
  Genre,
  GenreList,
  MyAddIcon,
  LikeIcon,
  PlayIcon,
  Icon,
  ArrowIcon,
} from "./Row.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },

  [`& .${tooltipClasses.tooltip}`]: {
    fontFamily: "'Netflix Sans', sans-serif",
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 16,
    padding: "10px 12px",
  },
}));

function Row({ title, fetchURL, list, handleOnClickMovie }) {
  const [movie, setMovie] = useState([]);

  const getMovieData = async () => {
    const req = await fetchURL();
    setMovie(req.data.results);
  };

  useEffect(() => {
    getMovieData();
  }, [fetchURL]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  let listGenreById = {};

  list.map((genre) => {
    return (listGenreById[genre.id] = genre.name);
  });

  return (
    <Container>
      <Title>{title}</Title>
      <SliderWrapper
        prevArrow={<StyledBackArrowIcon />}
        nextArrow={<StyledNextArrowIcon />}
        {...settings}
      >
        {movie.map((item, index) => {
          return (
            <Movie onClick={(e) => handleOnClickMovie(e, item.id)}>
              <Poster
                key={index}
                src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                // onMouseEnter={(e) => handleMouseEnter(e, index)}
                // onMouseLeave={() => handleMouseLeave()}
              />
              <HoverPicture className="hoverPicture">
                <TopHover
                  src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                ></TopHover>
                <BottomHover>
                  <Text>
                    {item?.name || item?.title || item?.original_name}
                  </Text>
                  <Icon>
                    <div>
                      <PlayIcon />
                      <MyAddIcon />
                      <LikeIcon />
                    </div>

                    <div>
                      <LightTooltip title="More Info" placement="top" arrow>
                        <ArrowIcon
                          onClick={(e) => handleOnClickMovie(e, item.id)}
                        />
                      </LightTooltip>
                    </div>
                  </Icon>
                  <GenreList>
                    {item?.genre_ids.map((genreId) => {
                      return <Genre>{listGenreById[genreId]}</Genre>;
                    })}
                  </GenreList>
                </BottomHover>
              </HoverPicture>
              {/* {show && curr === index && (
                <HoverPicture className="hoverPicture" />
              )} */}
            </Movie>
          );
        })}
      </SliderWrapper>
    </Container>
  );
}

export default Row;
