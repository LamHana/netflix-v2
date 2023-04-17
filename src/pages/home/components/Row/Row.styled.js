import Slider from "react-slick";
import styled from "styled-components";
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
`;
export const Movie = styled.div``;
export const Poster = styled.img`
  border-radius: 5px;
`;
