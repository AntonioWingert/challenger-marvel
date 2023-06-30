import { useState } from 'react';
import * as S from './styles';

import { getCharacters } from '../../Api';
import { MarvelApiResponse } from '../../@types/Api';

import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import CustomTitle from '../CustomTitle';
import HeroContainer from '../HeroContainer';

export default function Search() {
  const [heroInput, setHeroInput] = useState('');
  const [heroData, setHeroData] = useState<MarvelApiResponse | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setHeroData(null);
    if (heroInput === '') return setError('Insira um nome válido');
    const data = await getCharacters(heroInput);
    if (data.data.results.length === 0) return setError('Nenhum personagem com esse nome foi encontrado');
    setHeroData(data);
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <CustomTitle title='Pesquise seu heroi favorito!' size='lg' $weight='regular' />
      <CustomInput placeholder='Insira o nome do seu personagem favorito' value={heroInput} onChange={({ target: { value } }) => setHeroInput(value)} />
      <CustomButton title='Pesquisar' size='lg' />

      {error !== '' && <S.Error>{error}</S.Error>}
      {heroData !== null && <HeroContainer data={heroData.data} />}
    </S.Container>
  );
}