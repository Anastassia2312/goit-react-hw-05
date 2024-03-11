import { Suspense, useEffect, useState } from "react";
import { Outlet, NavLink, useParams } from "react-router-dom";
import { getMoviesById } from "../../movies-api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMoviesById() {
      try {
        setError(false);
        setLoading(true);
        const movieById = await getMoviesById(movieId);
        setMovie(movieById);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesById();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movie && <MovieDetails movie={movie} />}

      <div>
        <p>Additional information:</p>
        <ul>
          <li>
            <NavLink to="cast">Movie Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Movie Review</NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading sub component...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
