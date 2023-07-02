const mockMarvelAPI = {
    data: {
      results: [
        {
          id: 1,
          name: "Iron Man",
          description: "Genius. Billionaire. Playboy. Philanthropist.",
          thumbnail: {
            path: "http://example.com/ironman",
            extension: "jpg",
          },
        },
        {
          id: 2,
          name: "Spider-Man",
          description: "Friendly neighborhood superhero.",
          thumbnail: {
            path: "http://example.com/spiderman",
            extension: "jpg",
          },
        },
      ],
    },
};

export default mockMarvelAPI;