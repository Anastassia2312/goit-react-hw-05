import { useState, useMemo } from "react";
import { getSearchingMovies } from "../../movies-api";
import css from "./MoviesPage.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MoviesList from "../../components/MoviesList/MoviesList";
import { useSearchParams } from "react-router-dom";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const [params] = useSearchParams();
  const searchMovie = params.get("query") ?? "";

  const handleMovieSearch = async (topic) => {
    try {
      setMovies([]);
      setError(false);
      setLoader(true);
      const searchMovies = await getSearchingMovies(topic);
      setMovies(searchMovies);
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchMovie.toLowerCase())
    );
  }, [movies, searchMovie]);

  return (
    <div className={css.moviesPage}>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <SearchBar onSearch={handleMovieSearch} />
      {movies.length > 0 && <MoviesList movies={filteredMovies} />}
    </div>
  );
}
