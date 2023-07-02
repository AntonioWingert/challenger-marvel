import { MarvelApiResponse } from "../@types/Api";

const mockMarvelAPICharacterById = {
  data: {
    results: [
      {
        id: 1,
        name: "Iron Man",
        description: "Genius. Billionaire. Playboy. Philanthropist.",
        thumbnail: {
          path: "http://example.com/ironman",
        },
      },
    ],
  },
} as MarvelApiResponse;

export default mockMarvelAPICharacterById;