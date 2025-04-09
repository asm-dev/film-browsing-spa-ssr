import { MovieData } from "../../services/movies/movies-api-service.types";

export type UseMoviesResult = {
  movies: MovieData[];
  loading: boolean;
  error: string | null;
};
