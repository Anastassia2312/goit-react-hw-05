import MovieItem from "../MovieItem/MovieItem";
import css from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieItem movie={movie} />
        </li>
      ))}
    </ul>
  );
}
