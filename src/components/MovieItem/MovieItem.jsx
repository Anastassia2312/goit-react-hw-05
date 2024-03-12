import { Link, useLocation } from "react-router-dom";
import css from "./MovieItem.module.css";
export default function MovieItem({ movie }) {
  const location = useLocation();
  return (
    <div className={css.wrapper}>
      <Link className={css.item} to={`/movies/${movie.id}`} state={location}>
        {movie.title}
      </Link>
    </div>
  );
}
