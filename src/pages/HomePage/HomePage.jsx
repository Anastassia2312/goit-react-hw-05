import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";
import { getTrendingMovies } from "../../movies-api.js";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setLoading(true);
        const trendMovies = await getTrendingMovies();
        setMovies(trendMovies);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
