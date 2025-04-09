import { MovieData } from "../services/movies/movies-api-service.types";

export const MOVIE_DATA_MOCK: MovieData[] = [
  {
    id: 1,
    title: "Interstellar",
    overview:
      "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por asegurar la supervivencia de la humanidad.",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path: "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
    release_date: "2014-11-05",
    vote_average: 8.6,
    vote_count: 32000,
    popularity: 80.5,
    original_language: "en",
    original_title: "Interstellar",
    genre_ids: [12, 18, 878],
    adult: false,
    video: false,
  },
  {
    id: 2,
    title: "Inception",
    overview:
      "Dom Cobb es un ladrón hábil, el mejor en el arte del espionaje: extraer secretos valiosos desde lo profundo del subconsciente durante el sueño.",
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    release_date: "2010-07-15",
    vote_average: 8.8,
    vote_count: 29000,
    popularity: 90.1,
    original_language: "en",
    original_title: "Inception",
    genre_ids: [28, 878, 12],
    adult: false,
    video: false,
  },
];
