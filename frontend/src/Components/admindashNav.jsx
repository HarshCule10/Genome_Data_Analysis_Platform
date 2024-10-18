import React, { useState } from 'react';

const AdmindashNav = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Call parent function to filter users
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admeme Dashboard</h1>

      <div className="flex items-center space-x-4">
        {/* Search input */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search users..."
          className="bg-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring focus:ring-gray-600"
        />

        {/* Logout button */}
        <button
          className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/home/adminlogin'; // Simple redirect
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdmindashNav;
