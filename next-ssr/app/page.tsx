import MovieList from "../../shared/components/MovieList";
import { MoviesApiService } from "../../shared/services/movies/movies-api-service";

export default async function HomePage() {
  const apiKey = process.env.TMDB_API_KEY!;
  const api = new MoviesApiService(apiKey);

  const movies = await api.getPopularMovies();

  return (
    <main>
      <h1>Películas populares</h1>
      <MovieList movieList={movies.results} />
    </main>
  );
}
