import React from "react";
import MovieCard from "../movie-card/movie-card";

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
