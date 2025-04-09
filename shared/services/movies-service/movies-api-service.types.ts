export type MovieData = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  adult: boolean;
  video: boolean;
};

export type MoviesAPIServiceResponse = {
  page: number;
  results: MovieData[];
  total_results: number;
  total_pages: number;
};
