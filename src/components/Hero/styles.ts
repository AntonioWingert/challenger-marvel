import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  width: 150px;
  height: 270px;
  background-color: #ccc;
  border-radius: 0.5rem;

  h2 {
    font-size: 1rem;
    text-align: center;
  }

  img {
    width: 100px;
    height: 150px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${({theme}) => theme.colors["secondary"]};
    width: 100%;
    height: 25px;
    background-color: ${({theme}) => theme.colors["bg-primary"]};
  }
`;