import React, { useEffect, useState } from "react";
import {
  Avt,
  Container,
  LeftNav,
  Logo,
  Menu,
  MenuItem,
  NavBar,
  RightNav,
} from "./Nav.styled";
import NavLogo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
function Nav() {
  const [show, setShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else setShow(false);
  };
  const menu = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "TV Shows",
      link: "/home/tv-shows",
    },
    {
      name: "Movies",
      link: "/home/movies",
    },
    {
      name: "New & Popular",
      link: "/home/new-and-popular",
    },
    {
      name: "My List",
      link: "/home/my-list",
    },
  ];
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <Container className={`${show && "dark_bg"}`}>
      <NavBar>
        <RightNav>
          <Logo src={NavLogo}></Logo>
          <Menu>
            {menu.map((item, index) => {
              return (
                <MenuItem key={index}>
                  <Link to={item.link}> {item.name} </Link>
                </MenuItem>
              );
            })}
          </Menu>
        </RightNav>
        <LeftNav>
          <Avt src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></Avt>
        </LeftNav>
      </NavBar>
    </Container>
  );
}

export default Nav;
