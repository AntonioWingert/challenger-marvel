import { Link } from 'react-router-dom';
import * as S from './styles';

type HeroProps = {
  name: string;
  thumbnail: string;
  description: string;
}

export default function HeroDescription({ name = '', thumbnail = '', description = ''}: HeroProps) {
  return (
    <S.Container>
      <h2>{name}</h2>
      <img src={`${thumbnail}/portrait_uncanny.jpg`} alt={`Hero image ${name}`} />
      <p>{description}</p>
      <Link to={`/`}>Voltar</Link>
    </S.Container>
  );
}