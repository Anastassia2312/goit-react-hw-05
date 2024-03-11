export default function MovieDetails({ movie }) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <h2>{movie.title}</h2>
      <p>Overview: {movie.overview}</p>
      <p>Genres: {movie.genres}</p>
    </div>
  );
}
