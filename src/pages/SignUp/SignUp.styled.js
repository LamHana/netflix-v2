import styled from "styled-components";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export const Container = styled.div`
  height: 100vh;
  background-image: ${({ url }) => (url ? `url(${url})` : null)};
  background-size: cover;
  background-position: center center;
  object-fit: contain;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  margin: 0 6rem;
`;

export const BlurBackground = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;
export const Logo = styled.img`
  width: 9.5rem;
  height: 2.5rem;
`;

export const SignInButton = styled.button`
  padding: 10px 15px;
  color: white;
  background-color: rgb(229, 9, 20);
  font-weight: bold;
  border: none;
  border-radius: 5px;
  transition: all 0.1s ease-in;
  &:hover {
    background-color: rgb(193, 17, 25);
  }
`;

export const Body = styled.div`
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Hero = styled.h1`
  font-size: 3rem;
`;

export const Title = styled.h2`
  font-weight: normal;
  margin: 2rem 0;
`;

export const Text = styled.h3`
  font-weight: normal;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  input {
    padding: 10px;
    border: 1px solid #888;
    background: transparent;
    outline-width: 0;
    height: 3.5rem;
    width: 25%;
    max-width: 600px;
    border-radius: 5px;
  }

  button {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    background-color: rgb(229, 9, 20);
    border-radius: 5px;
    height: 3.5rem;
    padding: 0 1rem;
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s ease-in;
  }

  button:hover {
    background-color: rgb(193, 17, 25);
  }
`;

export const ArrowIcon = styled(ArrowForwardIosOutlinedIcon)``;
