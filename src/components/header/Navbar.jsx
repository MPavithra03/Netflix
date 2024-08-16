import { Outlet, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../footer/Footer";

const Navbar = () => {
  
  return (
    
    <>
      <nav className=" relative mx-auto px-8 py-1 z-10" >
          <ul className=" grid grid-cols-5 gap-5 fixed w-full left-0 px-3.5 h-12  bg-opacity-60 bg-black">
          <li className="pl=3 m-2 z-10"><Link to="/"><img src= "../public/netflix-logo.png" width={90} height={150} alt="" /></Link></li>
          <li className="text-white hover:text-white m-2 p-1.5 font-bold ">
            <Link to="/tvshows">Tvshows</Link>
          </li>
          <li className="text-gray-300 hover:text-white m-2 p-1.5 font-bold">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="text-gray-300 hover:text-white m-2 p-1.5 font-bold">
            <Link to="/mylist">MyList</Link>
          </li>
          <li className=" text-gray-300 hover:text-white m-2 p-1.5 font-bold">
            <Link to="/search">Search</Link>
          </li>
          </ul>
      </nav>
      <Outlet />

      <Footer/>
    </>
  )
};

export default Navbar;