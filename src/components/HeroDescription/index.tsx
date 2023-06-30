import { Link } from 'react-router-dom';
import * as S from './styles';

type HeroProps = {
  id: number;
  name: string;
  thumbnail: string;
}

export default function HeroDescription({ id = 0, name = '', thumbnail = ''}: HeroProps) {
  return (
    <S.Container>
      <h2>{name}</h2>
      <img src={`${thumbnail}/portrait_medium.jpg`} alt={`Hero image ${name}`} />
      <Link to={`/description/${id}`}>Ver Mais</Link>
    </S.Container>
  );
}