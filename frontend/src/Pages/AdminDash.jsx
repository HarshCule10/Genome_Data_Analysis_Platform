import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import AdmindashNav from '../Components/admindashNav';

const Dashboard = () => {
  const [users, setUsers] = useState([
    { username: 'John Doe' },
    { username: 'Jane Smith' },
    { username: 'Mike Johnson' },
    { username: 'Emily Davis' },
  ]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const navigate = useNavigate();

  // Function to filter users based on search query
  const handleSearch = (query) => {
    const filtered = users.filter(user =>
      user.username.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900">
      {/* Navigation Bar with search functionality */}
      <AdmindashNav onSearch={handleSearch} />

      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feedback Section */}
          <div className="p-4 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">User Feedback</h2>
            <div className="space-y-4">
              {[
                { feedback: 'The app is really slow on my phone.' },
                { feedback: 'Great update! Everything runs smoothly.' },
                { feedback: 'Facing issues with login after the last update.' },
                { feedback: 'Love the new UI, but notifications are delayed.' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
                  <p className="text-gray-700 dark:text-gray-300">{item.feedback}</p>
                </div>
              ))}
            </div>
          </div>

          {/* User List Section */}
          <div className="p-4 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Users</h2>
            <div className="space-y-4">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
                    <p className="text-gray-700 dark:text-gray-300">{user.username}</p>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Block
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">No users found</p>
              )}
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center space-x-8 mt-8">
          {/* Login Logs Button */}
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            onClick={() => navigate('/login-logs')} // Navigating to Login Logs
          >
            Login Logs
          </button>

          {/* Blocked Users Button */}
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            onClick={() => navigate('/blocked-users')} // Navigating to Blocked Users
          >
            Blocked Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
