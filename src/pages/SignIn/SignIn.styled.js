import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  max-width: 400px;
  padding: 70px;
  margin: auto auto;
  background: rgba(0, 0, 0, 0.85);
  input {
    margin: 1rem 0;
    background: #333;
    border-radius: 5px;
    color: #fff;
    padding: 16px;
    height: 3rem;
    width: 100%;

    border: none;
  }

  button {
    width: 100%;
    height: 3rem;
    color: white;
    font-weight: bold;
    background: rgb(229, 9, 20);
    border-radius: 5px;
    margin-top: 1rem;
  }

  h4 {
    margin-top: 3rem;
  }

  span {
    font-weight: normal;
    margin-right: 0.5rem;
    color: #737373;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
