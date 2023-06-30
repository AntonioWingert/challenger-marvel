import * as S from './styles';

export type CustomTitleProps = {
  title: string;
  size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 'light' | 'regular' | 'bold';
  color?: 'primary' | 'secondary';
}

export default function CustomTitle({ title = 'Header', size, weight = 'regular', as = "h1", color = "primary" }: CustomTitleProps) {
  return (
    <S.Container size={size} weight={weight} as={as} color={color}>{title}</S.Container>
  );
}