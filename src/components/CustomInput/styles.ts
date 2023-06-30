import { styled } from "styled-components";
import { CustomInputProps } from ".";

export const Input = styled.input<CustomInputProps>`
  width: 50%;
  height: 4rem;
  border-radius: 10px;
  border: none;
  outline: none;
  text-align: left;
  padding-left: ${({ theme }) => theme.padding.lg};
  font-size: ${({ theme }) => theme["font-sizes"].sm};

  &::placeholder {
    color: #ccc;
    font-size: 1rem;
    padding-left: 1rem;
  }

  @media (max-width: 320px) {
    width: 80%;
    padding-left: 0;

    &::placeholder {
      padding-left: 0.4rem;
    }
  }
`;
