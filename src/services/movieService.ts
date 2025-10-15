import axios from 'axios';
import type { Movie } from '../types/movie';

interface MovieSearchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const token = import.meta.env.VITE_TMDB_TOKEN;
  const response = await axios.get<MovieSearchResponse>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: { query },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.results;
};