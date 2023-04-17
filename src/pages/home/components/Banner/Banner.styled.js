import ReactPlayer from "react-player";
import styled from "styled-components";
export const Container = styled.header`
  height: 700px;
  background-image: ${({ url }) => (url ? `url(${url})` : null)};
  background-size: cover;
  background-position: center center;
  object-fit: contain;
  position: relative;
  z-index: 1;
`;
export const Backdrop = styled.div``;
export const BannerContent = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  position: relative;
`;
export const MovieName = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 1.2vw;
  max-width: 600px;
`;

export const MovieDesc = styled.p`
  width: 45rem;
  max-width: 560px;
  height: 80px;
  color: #fff;
  font-size: 1.2vw;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.1vw;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const MovieButton = styled.div`
  display: flex;
  margin-top: 1.5vw;
  button:first-child {
    color: black;
    background-color: white;
  }
  button:first-child:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    outline: none;
    border: none;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 0.2vw;
    padding: 0.5rem 1rem;
    background-color: rgba(109, 109, 110, 0.7);
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  button:hover {
    background-color: rgba(109, 109, 110, 0.4);
  }
`;

export const Blank = styled.div`
  width: 1rem;
`;

export const Video = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
