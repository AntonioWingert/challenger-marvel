import { useState } from 'react';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import CustomTitle from '../CustomTitle';
import * as S from './styles';
import { getCharacters } from '../../Api';
import HeroContainer from '../HeroContainer';
import { MarvelApiResponse } from '../../@types/Api';

export default function Search() {
  const [heroInput, setHeroInput] = useState('');
  const [heroData, setHeroData] = useState<MarvelApiResponse | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = await getCharacters(heroInput);
    setHeroData(data);
    console.log(data);
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <CustomTitle title='Pesquise seu heroi favorito!' size='md' weight='regular' />
      <CustomInput placeholder='Insira o nome do seu personagem favorito' value={heroInput} onChange={({ target: { value } }) => setHeroInput(value)} />
      <CustomButton title='Pesquisar' size='lg' />


      {heroData !== null && <HeroContainer data={heroData.data} />}
    </S.Container>
  );
}