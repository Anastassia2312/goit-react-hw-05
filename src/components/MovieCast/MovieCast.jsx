import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { getMovieCast } from "../../movies-api";
export default function MovieCast() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchMoviesById() {
      try {
        setError(false);
        setLoading(true);
        const movieById = await getMovieCast(movieId);
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
    </div>
  );
}
