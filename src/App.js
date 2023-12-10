import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hom from './pages/Hom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Movies from './pages/Movies';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import NonLoginPage from './pages/NonLoginPage';
import Genres from './pages/Genres';
import AddMovie from './pages/AddMovie';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const movies = [
    {
      movieName: 'Sholay',
      year: 1975,
      genres: 'Action',
      language: 'Hindi',
      country: 'India',
    },
    {
      movieName: 'The Godfather',
      year: 1972,
      genres: 'Crime',
      language: 'English',
      country: 'United States',
    },
    {
      movieName: 'Spirited Away',
      year: 2001,
      genres: 'Animation',
      language: 'Japanese',
      country: 'Japan',
    },
    {
      movieName: 'Ghost',
      year: 2023,
      genres: 'Thriller',
      language: 'Kannada',
      country: 'India',
    },
  ];
  return (
    <BrowserRouter>
      <div className="body">
        <div class="snow_wrap">
          <div class="snow"></div>
          <Container class="sai">
            <SideBar isLoggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Routes>
              <Route path="/" element={<Hom isLoggedIn={loggedIn} />} />
              <Route path="/movies" element={<Movies movies={movies} />} />
              <Route path="*" element={<NonLoginPage />} />
              {loggedIn && (
                <Route path="/genres" element={<Genres movies={movies} />} />
              )}
              {loggedIn && (
                <Route
                  path="/addMovies"
                  element={<AddMovie movies={movies} />}
                />
              )}
            </Routes>
          </Container>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
