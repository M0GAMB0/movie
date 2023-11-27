import { useEffect } from 'react';
import MovieCard from '../components/MovieCard';
const Movies = ({movies}) => {
  useEffect(()=>{
    console.log(movies);
  },[])
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 style={{ color: '#fff' }}>Find a movie to watch</h1>
      {/* <MovieCard
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
      /> */}

      {movies.map((movie, idx)=><MovieCard
        movieName={movie.movieName}
        year={movie.year}
        genres={movie.genres}
        language={movie.language}
        country={movie.country}
        key={idx}
      />)}
    </div>
  );
};
export default Movies;
