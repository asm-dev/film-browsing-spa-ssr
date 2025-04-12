import { TMDB_API_URL, TMDB_LANG } from "../../config/tmdb.config";
import { buildUrl, fetcher } from "../../helpers";
import {
  MovieData,
  MoviesAPIServiceResponse,
} from "./movies-api-service.types";

export class MoviesApiService {
  private apiKey: string;
  private baseUrl = TMDB_API_URL;
  private lang = TMDB_LANG;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error("Se necesita una API Key para acceder a la API de TMDb");
    }
    this.apiKey = apiKey;
  }

  public getPopularMovies(): Promise<MoviesAPIServiceResponse> {
    return fetcher<MoviesAPIServiceResponse>(
      buildUrl(this.baseUrl, "/movie/popular"),
      {
        api_key: this.apiKey,
        language: this.lang,
      }
    );
  }

  public searchMovies(query: string): Promise<MoviesAPIServiceResponse> {
    return fetcher<MoviesAPIServiceResponse>(
      buildUrl(this.baseUrl, "/search/movie"),
      {
        query,
        api_key: this.apiKey,
        language: this.lang,
      }
    );
  }

  public getMovieDetails(id: number): Promise<MovieData> {
    return fetcher<MovieData>(buildUrl(this.baseUrl, `/movie/${id}`), {
      api_key: this.apiKey,
      language: this.lang,
    });
  }

  public async getMoviesByQuery(
    apiKey: string,
    query: string
  ): Promise<MoviesAPIServiceResponse> {
    return fetcher<MoviesAPIServiceResponse>(
      buildUrl(TMDB_API_URL, "/search/movie"),
      {
        api_key: apiKey,
        language: TMDB_LANG,
        query,
      }
    );
  }
}
