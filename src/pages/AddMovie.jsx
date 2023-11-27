import { useState } from 'react';
import { Button, Toast, ToastContainer } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const AddMovie = ({movies}) => {
  const [movieName, setMovieName] = useState('');
  const [year, setYear] = useState('');
  const [genres, setGenres] = useState('');
  const [language, setLanguage] = useState('');
  const [country, setCountry] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const showToast = () => setShowSuccessMessage(!showSuccessMessage);

  const handleSubmit=()=>{
    const newMovie={
      movieName: movieName,
      year: year,
      genres: genres,
      language: language,
      country: country,
    }
    setMovieName('');
    setYear('')
    setGenres('')
    setLanguage('')
    setCountry('')
    showToast();
    setTimeout((()=>showToast()),1000)
    movies.push(newMovie)
  }
    return <div>
      <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Movie Name" value={movieName} onChange={(event)=>setMovieName(event.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Year</Form.Label>
            <Form.Control type="text" placeholder="Enter Year" value={year} onChange={(event)=>setYear(event.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Genres</Form.Label>
            <Form.Control type="text" placeholder="Enter Genres" value={genres} onChange={(event)=>setGenres(event.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Language</Form.Label>
            <Form.Control type="text" placeholder="Enter Language" value={language} onChange={(event)=>setLanguage(event.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Enter Country" value={country} onChange={(event)=>setCountry(event.target.value)}/>
          </Form.Group>
          <div className='text-center'>
            <Button  variant="primary" onClick={handleSubmit}>Add Movie</Button>
          </div>
          
      
      </Form>
      <ToastContainer
          className="p-3"
          position="bottom-end"
          style={{ zIndex: 1 }}
        >
          <Toast bg='success' show={showSuccessMessage}>
            <Toast.Body>Movie Added Successfully!</Toast.Body>
          </Toast>
        </ToastContainer>
    </div>
};
export default AddMovie;
