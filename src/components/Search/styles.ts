import { styled } from "styled-components";

export const Container = styled.form`
  width: 40vw;
  height: 60vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 320px) {
    font-size: ${({ theme }) => theme["font-sizes"]["sm"]};
    height: auto;
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme["colors"]["bg-primary"]};
`;