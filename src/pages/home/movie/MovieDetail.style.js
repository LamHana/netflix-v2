import { Modal } from "antd";
import styled from "styled-components";
import HdOutlinedIcon from "@mui/icons-material/HdOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddIcon from "@mui/icons-material/Add";
export const Container = styled.div`
  padding: 0 3em;
  margin-bottom: 2rem;
`;

export const MyModal = styled(Modal)`
  width: 850px !important;
  font-family: "Netflix Sans", sans-serif;
  .ant-modal-content {
    background-color: rgb(24, 24, 24);
    color: white;
    padding: 0 0 20px;
  }
  .ant-modal-close {
    width: 10%;
    right: 0;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;
  margin-bottom: 3rem;
`;
export const Left = styled.div`
  width: 80%;
`;
export const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  font-size: 16px;
`;
export const Right = styled.div`
  width: 25%;
`;
export const Year = styled.div`
  margin-right: 1em;
`;
export const Time = styled.div`
  margin-right: 1em;
`;
export const HDIcon = styled(HdOutlinedIcon)`
  color: white;
  margin-right: 1em;
`;
export const SubIcon = styled(SubtitlesOutlinedIcon)`
  color: white;
`;

export const TagLine = styled.div`
  font-size: 18px;
  margin-bottom: 0.2rem;
`;
export const Desc = styled.div`
  font-size: 16px;
`;
export const GenreList = styled.div`
  display: flex;
  margin-bottom: 2em;
`;
export const Genre = styled.div`
  margin-right: 1em;
  font-size: 14px;
`;

export const Age = styled.div`
  border: 1px solid hsla(0, 0%, 100%, 0.4);
  padding: 0 0.4em;
  margin-right: 1em;
`;

export const Title = styled.span`
  color: #777;
`;

export const Text = styled.span`
  margin-right: 0.2em;
`;

export const Cast = styled.div`
  margin-bottom: 1em;
`;

export const Genres = styled.div`
  display: flex;
`;

export const SuggestMovie = styled.div``;

export const Hero = styled.h1``;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

export const MovieCard = styled.div`
  border-radius: 0.2rem;
  background-color: #2f2f2f;
  overflow: hidden;
  cursor: pointer;
  &:hover .icon {
    opacity: 1;
  }
`;

export const TopCard = styled.div`
  position: relative;
`;
export const Picture = styled.img`
  width: 100%;
  height: 100px;
`;
export const BottomCard = styled.div`
  padding: 0.5rem 1rem 1rem;
  h3 {
    margin-bottom: 0.5rem;
  }
`;

export const DescCard = styled.p`
  color: #d2d2d2;
`;
export const Icon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.2s ease-in;
`;
export const PlayIcon = styled(PlayArrowIcon)`
  color: white;
  background-color: rgba(30, 30, 20, 0.5);
  border: 1px solid #fff;
  border-radius: 2em;
  font-size: 3rem !important;
`;

export const Rating = styled.div`
  color: #46d369;
  font-weight: 500;
  margin-right: 1em;
  font-size: 16px;
`;

export const CloseIcon = styled(CloseOutlinedIcon)`
  color: white;
  border-radius: 2em;
  background-color: #181818;
  font-size: 2.5rem !important;
`;

export const ModalFooter = styled.footer``;

export const AboutMovie = styled.h1`
  margin-top: 4rem;
  font-weight: 400;
  margin-bottom: 2rem;
  span {
    font-weight: bold;
  }
`;

export const ModalFooterContent = styled.div``;

export const Company = styled.div`
  margin-bottom: 1em;
`;

export const MaturityRating = styled.div`
  margin-top: 1em;
  display: flex;

  div {
    display: flex;
  }
`;
export const MyAddIcon = styled(AddIcon)`
  color: white;
  background-color: rgba(30, 30, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 2em;
  font-size: 2.5rem !important;
  &:hover {
    background-color: #2a2a2a;
    border-color: white;
  }
`;

export const MovieInfoTop = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
