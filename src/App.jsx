import './App.css'
import './FetchApi'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/header/Navbar';
import Home from './pages/1.home/Home'
import Tvshows from './pages/2.tvshows/Tvshows';
import Movies from './pages/3.movies/Movies';
import Mylist from './pages/4.mylist/Mylist';
import Search from './pages/5.search/Search';

const App = () => {
  return (
    <div className='relative w-full h-screen'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="/tvshows" element={<Tvshows />}/>
        <Route path="/movies" element={<Movies/>} />
        <Route path="/mylist" element={<Mylist/>} />
        <Route path="/search" element={<Search/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
  
}
export default App;