import { styled } from "styled-components";
import { CustomButtonProps } from ".";

type ButtonProps = Omit<CustomButtonProps, 'title'>;

export const Container = styled.button<ButtonProps>`
  cursor: pointer;
  padding: ${({theme, size}) => size ? theme["button-sizes"][size] : theme["button-sizes"].md};
  border-radius: 10px;
  border: none;
  background-color: ${({theme}) => theme.colors["bg-primary"]};
  color: ${({theme}) => theme.colors["secondary"]};
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;