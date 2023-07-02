import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import HeroNotFound from "../../components/HeroNotFound";
import HeroDescription from "../../components/HeroDescription";

import { getCharacterById } from "../../Api";
import { MarvelApiResponse } from "../../@types/Api";
import Loading from "../../components/Loading";

export default function Description() {
  const [heroData, setHeroData] = useState<MarvelApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams() as { id: string };

  useEffect(() => {
    const fetchHeroData = async () => {
      setIsLoading(true);
      try {
        const response = await getCharacterById(id);
        if (response.data.results.length === 0) return;
        setHeroData(response);
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHeroData();
  }, [id]);

  if (isLoading) return (
    <>
      <Loading />
    </>
  );

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