import CustomTitle from "../CustomTitle";
import * as S from "./styles";

import SpiderImage from "/spider-man.png";


import { Link } from "react-router-dom";

export default function HeroNotFound() {
  return (
    <>
      <S.Container>
        <img src={SpiderImage} />
        <CustomTitle title="Herói não encontrado" size="lg" />
        <Link to='/'>Voltar</Link>
      </S.Container>
    </>
  );
}