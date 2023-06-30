import { styled } from "styled-components";
import { CustomTitleProps } from ".";

type TitleProps = Omit<CustomTitleProps, "title">;

export const Container = styled.h1<TitleProps>`
  font-size: ${({ size, theme }) => size ? theme["font-sizes"][size] : theme["font-sizes"]["md"]};
  color: ${({color, theme}) => color ? theme.colors[color] : theme.colors.primary};
  font-weight: ${({ weight, theme }) => weight ? theme.weight[weight] : theme.weight.regular};
  padding: ${({theme}) => theme.padding.xl};
`;