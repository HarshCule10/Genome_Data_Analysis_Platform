import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // You can add any necessary logout logic here (like clearing local storage or tokens)
    navigate('/'); // Redirect to the home page
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      {/* Left Side: Search for a Species */}
      <div>
        <Link to="/search-species" className="hover:underline text-xl">Search For A Species</Link>
      </div>

      {/* Middle: Title */}
      <h1 className="text-2xl font-bold">Genome Data Analysis Platform</h1>

      {/* Right Side: Logout Button */}
      <div>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
