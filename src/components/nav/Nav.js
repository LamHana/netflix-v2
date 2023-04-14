import React, { useEffect, useState } from "react";
import { Avt, Container, LeftNav, Logo, NavBar } from "./Nav.styled";
import NavLogo from "../../assets/Logo.svg";
function Nav() {
  const [show, setShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  console.log(show);
  return (
    <Container className={`${show && "dark_bg"}`}>
      <NavBar>
        <Logo src={NavLogo}></Logo>
        <LeftNav>
          <Avt src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></Avt>
        </LeftNav>
      </NavBar>
    </Container>
  );
}

export default Nav;
