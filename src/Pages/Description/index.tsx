import { useParams } from "react-router-dom";
import HeroDescription from "../../components/HeroDescription";
import { useEffect, useState } from "react";
import { MarvelApiResponse } from "../../@types/Api";
import { getCharacterById } from "../../Api";
import { Link } from "react-router-dom";

export default function Description() {
  const [heroData, setHeroData] = useState<MarvelApiResponse | null>(null);
  const { id } = useParams() as { id: string };

  useEffect(() => {
    const fetchHeroData = async () => {
      const response = await getCharacterById(id);
      if (response.data.results.length === 0) return;
      setHeroData(response);
    };
    fetchHeroData();
  }, [id]);

  const hero = heroData?.data.results[0];

  if (!hero) return (
    <>
      <div>Héroi não encontrado, por favor retorne a tela incial</div>
      <Link to='/'>Voltar</Link>
    </>
  );


  return (
    <>
      <HeroDescription id={hero?.id} name={hero?.name} thumbnail={hero?.thumbnail.path} />
    </>
  );
}