import MovieCard from '../components/MovieCard';
const Movies = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 style={{ color: '#fff' }}>Find a movie to watch</h1>
      <MovieCard
        movieName="Sholay"
        year="1975"
        genres="Action"
        language="Hindi"
        country="India"
      />
      <MovieCard
        movieName="Sholay"
        year="1975"
        genres="Action"
        language="Hindi"
        country="India"
      />
    </div>
  );
};
export default Movies;
