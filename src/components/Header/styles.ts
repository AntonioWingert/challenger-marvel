import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background-color: ${({theme}) => theme.colors['bg-primary']};
`;