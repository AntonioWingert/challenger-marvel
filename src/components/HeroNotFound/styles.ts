import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  background-color: #ccc;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${({theme}) => theme.colors["secondary"]};
    background-color: ${({theme}) => theme.colors["bg-primary"]};
    width: 30%;
    height: 4rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
  }

  img {
    width: 20%;
    height: auto;
  }

  @media (max-width: 768px) {
    a {
      width: 60%;
      font-size: 1rem;
    }

    img {
      width: 80%;
      height: auto;
    }
  }
`;