import React from 'react';

const Dashboard = () => {
  return (
    <div className="h-screen bg-gray-100 p-4">
      <div className="flex">
        {/* Feedback Section */}
        <div className="w-2/3 p-4">
          <h2 className="text-lg font-semibold mb-4">User Feedback</h2>
          <div className="space-y-4">
            {/* Feedback Item */}
            {[
              { feedback: 'The app is really slow on my phone.' },
              { feedback: 'Great update! Everything runs smoothly.' },
              { feedback: 'Facing issues with login after the last update.' },
              { feedback: 'Love the new UI, but notifications are delayed.' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-700">{item.feedback}</p>
              </div>
            ))}
          </div>
        </div>

        {/* User List Section */}
        <div className="w-1/3 p-4">
          <h2 className="text-lg font-semibold mb-4">Users</h2>
          <div className="space-y-4">
            {/* User Item */}
            {[
              { username: 'John Doe' },
              { username: 'Jane Smith' },
              { username: 'Mike Johnson' },
              { username: 'Emily Davis' }
            ].map((user, index) => (
              <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                <p className="text-gray-700">{user.username}</p>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Block
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
