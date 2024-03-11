export default function MovieDetails({ movie }) {
  console.log(movie);
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <h2>{movie.original_title}</h2>
      <p>Overview: {movie.overview}</p>
      <p>Genres: {movie.genres}</p>
    </div>
  );
}
