import { MarvelApiResponse } from "../@types/Api";

const mockMarvelAPI = {
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
        {
          id: 2,
          name: "Spider Man",
          description: "Friendly neighborhood superhero.",
          thumbnail: {
            path: "http://example.com/spiderman",
          },
        },
      ],
    },
} as MarvelApiResponse;

export default mockMarvelAPI;