import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  }

  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-lg">Coffee Care</div>
      <div className="space-x-4">
        <Link to="/coffee-varieties">Varieties</Link>
        <Link to="/factories">Factories</Link>
        <Link to="/education">Education</Link>
        <Link to="/market">Market</Link>
        <Link to="/counties">Counties</Link>
        {role && <button onClick={handleLogout} className="bg-red-500 px-2 py-1 rounded">Logout</button>}
      </div>
    </nav>
  )
}

export default Navbar;
