import MovieCard from "./MovieCard";

export default function MovieList({ movieList }) {
  if (!movieList?.length) {
    return <p>No hay películas disponibles.</p>;
  }

  return (
    <div>
      {movieList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
