import { useState, useMemo, useEffect } from "react";
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
  const [query, setQuery] = useState("");

  const [params] = useSearchParams();
  const searchMovie = params.get("query") ?? "";

  useEffect(() => {
    if (query === "") {
      return;
    }
    const handleMovieSearch = async () => {
      try {
        setMovies([]);
        setError(false);
        setLoader(true);
        const searchMovies = await getSearchingMovies(query);
        setMovies(searchMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    handleMovieSearch();
  }, [query]);

  const getMovies = (searchQuery) => {
    setQuery(searchQuery);
    setMovies([]);
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
      <SearchBar onSearch={getMovies} />
      {movies.length > 0 && <MoviesList movies={filteredMovies} />}
    </div>
  );
}
