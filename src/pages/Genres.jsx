import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import MovieCard from '../components/MovieCard';
const Genres = ({movies}) => {
  const[showMovies, setShowMovies]=useState(false);
  const [moviesList, setMovieList]=useState([]);
  const [selectValue, setSelectValue]= useState("");
  const handleSearch=()=>{
    const newMovieList = movies.filter((movie)=>movie.genres==selectValue)
    setMovieList(newMovieList);
    setShowMovies(true)
  }
  const handleChange=(event)=>{
    setSelectValue(event.target.value)
  }
  return (
    <div className='text-center'>
      <Form.Select aria-label="Default select example" onChange={handleChange}>
        <option>Open this select menu</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="biography">Biography</option>
        <option value="Thriller">Thriller</option>
        <option value="Adventure">Adventure</option>
        <option value="Animation">Animation</option>
      </Form.Select>
      <Button variant="primary" onClick={handleSearch} style={{marginTop:"20px"}}>Search</Button>
      {showMovies && moviesList.map((movie,idx)=><MovieCard
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
export default Genres;
