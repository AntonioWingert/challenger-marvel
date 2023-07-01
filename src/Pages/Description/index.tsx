import { useParams } from "react-router-dom";
import HeroDescription from "../../components/HeroDescription";
import { useEffect, useState } from "react";
import { getCharacterById } from "../../Api";

import { MarvelApiResponse } from "../../@types/Api";

import HeroNotFound from "../../components/HeroNotFound";

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
      <HeroNotFound />
    </>
  );


  return (
    <>
      <HeroDescription name={hero.name} thumbnail={hero.thumbnail.path} description={hero.description} />
    </>
  );
}