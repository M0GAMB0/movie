import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hom from './pages/Hom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Movies from './pages/Movies';


const App=()=> {
  return (
  <BrowserRouter>
    <div className="body">
      <SideBar />
      <Routes>
      <Route path="/" element={<Hom />}/>
      <Route path="/movies" element={<Movies />}/>
    </Routes>
    </div>
    
  </BrowserRouter>
  
  );
}

export default App;
