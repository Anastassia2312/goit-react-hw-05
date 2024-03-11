import { useState } from "react";
import { getSearchingMovies } from "../../movies-api";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MoviesList from "../../components/MoviesList/MoviesList";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

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

  return (
    <div>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <SearchBar onSearch={handleMovieSearch} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
