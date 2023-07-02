import { styled } from "styled-components";
import { CustomTitleProps } from ".";

type TitleProps = Omit<CustomTitleProps, "title">;

export const Container = styled.h1<TitleProps>`
  font-size: ${({ $size, theme }) => $size  && theme["font-sizes"][$size]};
  color: ${({$color, theme}) => $color && theme.colors[$color]};
  font-weight: ${({ $weight, theme }) => $weight && theme.weight[$weight]};
  padding: ${({theme}) => theme.padding.xl};


  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme["font-sizes"]["sm"]};
  }
`;