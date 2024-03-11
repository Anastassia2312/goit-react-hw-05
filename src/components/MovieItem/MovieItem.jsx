import { Link } from "react-router-dom";
export default function MovieItem({ movie }) {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
    </div>
  );
}
