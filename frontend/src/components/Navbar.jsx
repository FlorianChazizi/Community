import React  from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

import '../styles/navbar.css'

function Navbar() {
  const {logout} = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate('/login');

  }

  return (
    <nav className="bg-gradient-to-r from-[#4158D0] to-[#C850C0] p-4 z-auto ">
      
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-white text-lg font-bold z-10 ">
          <Link to="/" className="text-white text-xl drop-shadow-md px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-black hover:shadow-md transition duration-300">CEP Application</Link>
        </div>
        <div className="flex space-x-4 z-10">
          

          { !user ? (
            <div>
              <Link to="/register" className="text-white text-xl drop-shadow-md px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-black hover:shadow-md transition duration-300">Register</Link>
              <Link to="/login" className="text-white text-xl drop-shadow-md px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-black hover:shadow-md transition duration-300">Login  </Link>
          </div>
        ) : (
          <div>
            <Link to="/dashboard" className="text-white text-xl drop-shadow-md px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-black hover:shadow-md transition duration-300">Dashboard</Link>
            <button onClick={handleClick} className="text-white text-xl drop-shadow-md px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-black hover:shadow-md transition duration-300"> Log out</button>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
