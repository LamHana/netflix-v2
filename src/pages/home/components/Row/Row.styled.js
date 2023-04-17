import Slider from "react-slick";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
export const Container = styled.div`
  height: 450px;
`;
export const Title = styled.div`
  color: #e5e5e5;
  font-size: 1.4vw;
  font-weight: 500;
  margin: 1.5em 4% 1.5em;
  min-width: 6em;
`;
export const SliderWrapper = styled(Slider)`
  .slick-slide {
    margin: 0 5px;
    height: 100%;
  }
  .slick-arrow {
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.6);
    height: 365px;
    width: 70px;

    transition: all 0.2s linear;
  }
  .slick-next {
    top: 182px;
    right: 0;
  }
  .slick-prev {
    top: 182px;
    left: 0;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 65px;
    color: white;
  }

  .slick-arrow:hover {
    color: #ffffff;
  }
`;
export const Movie = styled.div``;
export const Poster = styled.img`
  border-radius: 5px;
`;

export const StyledNextArrowIcon = styled(ArrowForwardIosIcon)`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
  // add any other styles you need here
`;

export const StyledBackArrowIcon = styled(ArrowBackIosNewIcon)`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
  // add any other styles you need here
`;
