import { MarvelApiResponse } from '../../@types/Api';
import Hero from '../Hero';
import * as S from './styles';

export default function HeroContainer(result: MarvelApiResponse) {
  return (
    <S.Container>
      {result.data.results.map((hero) => (
        <Hero
          key={hero.id}
          id={hero.id}
          name={hero.name}
          thumbnail={hero.thumbnail.path}
        />
      ))}
    </S.Container>
  );
}