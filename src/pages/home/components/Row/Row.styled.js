import Slider from "react-slick";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
  z-index: 2;

  div {
    z-index: 2;
  }
  .slick-slide {
    margin: 0 5px;
    height: 100%;
  }

  .slick-arrow {
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.2);
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
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
export const Movie = styled.div`
  position: relative;
  overflow: hidden;
  &:hover .hoverPicture {
    transform: translateY(-100%);
  }
`;
export const Poster = styled.img`
  border-radius: 5px;
  min-height: 365px;
`;

export const StyledNextArrowIcon = styled(ArrowForwardIosIcon)`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.2);
  // add any other styles you need here
`;

export const StyledBackArrowIcon = styled(ArrowBackIosNewIcon)`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.2);
  // add any other styles you need here
`;

export const HoverPicture = styled.div`
  position: absolute;
  /* top: 0; */
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  height: 100%;
  transform: translateY(0%);
  transition: transform 0.3s ease-in;
  height: 370px;
  z-index: 3;
  display: flex;
  flex-direction: column;
`;

export const TopHover = styled.img`
  object-fit: contain;
  border-radius: 5px 0;
  background-color: rgba(0, 0, 0, 0.2);
  flex: 50%;
`;
export const BottomHover = styled.div`
  border-radius: 0 5px;
  background-color: rgba(0, 0, 0, 0.8);
  flex: 50%;
`;

export const Text = styled.h2`
  margin: 0.5rem 1rem;
  text-align: center;
`;

export const GenreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.5rem;
`;

export const Genre = styled.li`
  margin-top: 0.5rem;
  margin-bottom: 5px;
  font-weight: normal;
  margin-right: 1.5rem;
  font-size: 14px;
  color: white;
  &::marker {
    color: gray;
  }
`;
export const Icon = styled.div`
  margin-top: 1rem;
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
`;
export const LikeIcon = styled(ThumbUpOutlinedIcon)`
  color: white;
  background-color: rgba(30, 30, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 2em;
  padding: 0.5rem;
  font-size: 2rem !important;
  &:hover {
    background-color: #2a2a2a;
    border-color: white;
  }
`;

export const MyAddIcon = styled(AddIcon)`
  color: white;
  background-color: rgba(30, 30, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 2em;
  font-size: 2rem !important;
  margin-right: 1rem;
  &:hover {
    background-color: #2a2a2a;
    border-color: white;
  }
`;

export const PlayIcon = styled(PlayArrowIcon)`
  color: black !important;
  background-color: white !important;
  /* border: 1px solid rgba(255, 255, 255, 0.7); */
  border-radius: 2em;
  font-size: 2rem !important;
  margin-right: 1rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.75) !important;
    border-color: white;
  }
`;

export const ArrowIcon = styled(KeyboardArrowDownIcon)`
  color: white;
  background-color: rgba(30, 30, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 2em;
  font-size: 2rem !important;
  margin-right: 1rem;
  &:hover {
    background-color: #2a2a2a;
    border-color: white;
  }
`;
