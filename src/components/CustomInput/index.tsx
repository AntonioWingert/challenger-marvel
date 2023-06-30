import * as S from './styles';

export type CustomInputProps = {
  placeholder: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function CustomInput({ placeholder = 'Insira suas informações aqui', ...props}: CustomInputProps) {
  return (
    <>
      <S.Input placeholder={placeholder} {...props} />
    </>
  );
}