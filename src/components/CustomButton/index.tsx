import * as S from './styles';

export type CustomButtonProps = {
  title: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function CustomButton({ title = 'Button', size = 'lg', ...rest }: CustomButtonProps) {
  return (
    <S.Container {...rest} size={size}>
      {title}
    </S.Container>
  );
}