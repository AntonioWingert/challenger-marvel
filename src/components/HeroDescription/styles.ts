import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #ccc;
  border-radius: 0.5rem;

  h2 {
    font-size: 4rem;
    text-align: center;
  }

  img {
    width: auto;
    height: auto;
  }

  p {
    font-size: 1rem;
    text-align: center;
    width: 40%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${({theme}) => theme.colors["secondary"]};
    width: 35rem;
    height: 4rem;
    background-color: ${({theme}) => theme.colors["bg-primary"]};
  }

  @media (max-width: 768px) {

    a {
      width: 100%;
      height: 2rem;
    }

    img {
      width: 80%;
      height: 40vh;
    }

    p {
      width: 80%;
      text-align: justify;
    }
  }
`;