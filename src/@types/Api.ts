export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
  };
}

export interface MarvelApiResponse {
  data: {
    results: Character[];
  };
  // outras propriedades relevantes
}