import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = ({ loginType, toggleRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clientId, setClientId] = useState('');
  const [scientistId, setScientistId] = useState('');
  const [institutionId, setInstitutionId] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Prepare the registration data based on the login type
    const registrationData = loginType === 'Client'
      ? { name, email, password, clientId }
      : { name, email, password, scientistId, institutionId };

    console.log('Registration data:', registrationData); // Log registration data

    try {
      const response = await axios.post('http://localhost:3000/api/register', registrationData);
      console.log(response.data); // Log the response from the server
      alert('Registration successful!'); // Handle success response
    } catch (error) {
      console.error('There was an error registering!', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="w-full bg-black p-10 rounded-lg shadow-2xl bg-opacity-90">
      <h2 className="text-3xl font-bold text-center text-gray-300 mb-8">
        Register as {loginType}
      </h2>
      <form onSubmit={handleRegister} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm"
            placeholder="••••••••"
            required
          />
        </div>

        {/* Additional Fields Based on Registration Type */}
        {loginType === 'Client' && (
          <div>
            <label htmlFor="client_id" className="block text-sm font-medium text-gray-300">
              Client ID
            </label>
            <input
              type="text"
              id="client_id"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm"
              placeholder="Enter Client ID"
              required
            />
          </div>
        )}

        {loginType === 'Scientist' && (
          <>
            <div>
              <label htmlFor="scientist_id" className="block text-sm font-medium text-gray-300">
                Scientist ID
              </label>
              <input
                type="text"
                id="scientist_id"
                value={scientistId}
                onChange={(e) => setScientistId(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm"
                placeholder="Enter Scientist ID"
                required
              />
            </div>
            <div>
              <label htmlFor="institution_id" className="block text-sm font-medium text-gray-300">
                Institution ID
              </label>
              <input
                type="text"
                id="institution_id"
                value={institutionId}
                onChange={(e) => setInstitutionId(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm"
                placeholder="Enter Institution ID"
                required
              />
            </div>
          </>
        )}

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-red-400 text-white py-3 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>
      <button
        onClick={toggleRegister}
        className="mt-4 text-gray-300 hover:text-red-400"
      >
        Already have an account? Login
      </button>
    </div>
  );
};

export default RegisterForm;
