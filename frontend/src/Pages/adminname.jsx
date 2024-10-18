import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  
  useEffect(() => {
    console.log('AdminLogin component loaded');
    // Any side effects or data fetching can go here
  }, []);
  const handleLogin = () => {
    navigate('/home/adminlogin/admindash');  // Navigate to /adminlogin
  };
 /* const handleLogin = (e) => {
    e.preventDefault();
   
    console.log('Admin ID:', adminId);
    console.log('Password:', password);
  };
*/
  return (
    <div>
      {}
      <Navbar />

      {/* Main Content - Admin Login Form */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="bg-gray-900 text-white w-full max-w-md p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Admin Login</h2>
          <form onSubmit={handleLogin}>
            {/* Admin ID Field */}
            <div className="mb-4">
              <label htmlFor="admin-id" className="block text-lg font-medium">Admin ID</label>
              <input 
                type="text"
                id="admin-id"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-gray-400 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500" 
                placeholder="Enter Admin ID" 
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-lg font-medium">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-gray-400 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500"
                placeholder="••••••••"
              />
            </div>

            {/* Login Button */}
            <button
            
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg focus:outline-none"
            >
              Login
            </button>
          </form>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
       onClick={handleLogin}
       >
          dashboard
        </button>

        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
