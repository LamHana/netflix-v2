import ReactPlayer from "react-player";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
export const Container = styled.div`
  height: 450px;
  background-image: ${({ url }) => (url ? `url(${url})` : null)};
  background-size: cover;
  background-position: center center;
  object-fit: contain;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
`;
export const Backdrop = styled.div``;

export const Video = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 15px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #181818, transparent 50%);
  position: relative;
`;

export const BannerContent = styled.div`
  position: absolute;
  bottom: 15%;
  left: 5%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MovieName = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  max-width: 400px;
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

export const MyAddIcon = styled(AddIcon)`
  color: white;
  background-color: rgba(30, 30, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 2em;
  font-size: 2.5rem !important;
  margin-right: 1rem;
  &:hover {
    background-color: #2a2a2a;
    border-color: white;
  }
`;

export const LikeIcon = styled(ThumbUpOutlinedIcon)`
  color: white;
  background-color: rgba(30, 30, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 2em;
  padding: 0.5rem;
  font-size: 2.5rem !important;
  &:hover {
    background-color: #2a2a2a;
    border-color: white;
  }
`;
