import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w185";

export default function MovieCard({ movie }) {
  return (
    <div>
      {movie.poster_path ? (
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      ) : (
        <div>La película no dispone ninguna imagen disponible.</div>
      )}
      <div>
        <h3>Título: {movie.title}</h3>
        <p>Votos: {movie.vote_average}</p>
      </div>
    </div>
  );
}
