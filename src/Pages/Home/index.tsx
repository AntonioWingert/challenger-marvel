import * as S from './styles';

import Header from "../../components/Header";
import Search from "../../components/Search";

export default function Home() {

  return (
    <S.Container>
      <Header />
      <Search />
    </S.Container>
  );
}