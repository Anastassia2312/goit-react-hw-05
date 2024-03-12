import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { getMovieCast } from "../../movies-api";
import MovieCastList from "../MovieCastList/MovieCastList";

export default function MovieCast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setError(false);
        setLoading(true);
        const cast = await getMovieCast(movieId);
        setActors(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {actors.length === 0 && !error && !loading && (
        <p>No information about movie cast yet...</p>
      )}
      <MovieCastList movieCast={actors} />
    </div>
  );
}
