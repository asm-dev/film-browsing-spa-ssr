import { MovieData } from "../../services/movies-service/movies-api-service.types";

export type UseMoviesResult = {
  movies: MovieData[];
  loading: boolean;
  error: string | null;
};
