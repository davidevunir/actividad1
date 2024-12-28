import {Link} from "react-router-dom";
import {NavLink} from "./NavLink.jsx";
import {ShoppingCart, SquareLibrary, User, Users} from 'lucide-react';
import {SearchBox} from "./Searchbox.jsx";

export const Navbar = () => {
  return (
      <nav className="fixed top-0 left-0 w-full bg-neutral-800 text-white z-50 px-4 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl ml-2">Relatos de Papel</Link>
          <div className="flex gap-4 items-center">
            <SearchBox/>
            <NavLink text="Géneros" icon={<SquareLibrary size={20}/>}/>
            <NavLink text="Autores" icon={<Users size={20}/>}/>
            <NavLink icon={<ShoppingCart size={20}/>} isCart={true}/>
            <Link to="/profile" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500">
              <User size={20}/>
            </Link>
          </div>
        </div>
      </nav>
  );
}
