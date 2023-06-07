import styled from "styled-components";
export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(20, 20, 20, 0) 100%
  );
  &.dark_bg {
    background: rgb(20, 20, 20);
  }
  z-index: 10;
  transition: all 0.5s ease-in;
`;
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 68px;
  padding: 0 4%;
`;
export const Logo = styled.img`
  align-items: center;
  width: 90px;
  margin-right: 25px;
`;
export const Avt = styled.img`
  width: 30px;
  height: 30px;
`;
export const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  list-style: none;
  margin-left: 20px;
  font-size: 14px;
  a {
    color: #fff;
    text-decoration: none;
  }
`;
