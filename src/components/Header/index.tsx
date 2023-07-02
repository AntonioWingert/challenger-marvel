import CustomTitle from "../CustomTitle";

import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <CustomTitle title="Marvel Challenger" $size="lg" $weight="regular" $color="secondary"/>
    </S.Container>
  );
}