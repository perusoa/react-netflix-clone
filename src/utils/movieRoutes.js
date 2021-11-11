const movieRoutes = {
  fetchTrending: {
    order: 1,
    category: 'Trending Now',
    url: '/trending/tv/week?language=en-US'
  },
  fetchNetflixOriginals: {
    order: 2,
    category: 'Netflix Originals',
    type: 'tv',
    url: '/discover/tv?with_networks=213'
  },
  fetchTopRated: {
    order: 3,
    category: 'Top Rated',
    type: 'movie',
    url: '/movie/top_rated?language=en-US'
  },
  fetchActionMovies: {
    order: 4,
    category: 'Action Movies',
    type: 'movie',
    url: '/discover/movie?with_genres=28'
  },
  fetchComedyMovies: {
    order: 5,
    category: 'Comedies',
    type: 'movie',
    url: '/discover/movie?with_genres=35'
  },
  fetchHorroMovies: {
    order: 6,
    category: 'Horror Films',
    type: 'movie',
    url: '/discover/movie?with_genres=27'
  },
  fetchRomanceMovies: {
    order: 7,
    category: 'Love & Romance',
    type: 'movie',
    url: '/discover/movie?with_genres=10749'
  }
};

export default movieRoutes;