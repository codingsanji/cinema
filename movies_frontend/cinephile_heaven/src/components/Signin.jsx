import React, { useState } from 'react';
import axios from 'axios';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BACKEND_URL = "http://localhost:8080";

const Signin = ({ onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/users/login`, { email, password });
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        localStorage.setItem('token', response.data); // Store token in localStorage for future requests
        alert('Login successful!');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h1 className="text-2xl font-semibold text-blue-800 text-center mb-1">LOG-IN</h1>
        <i><h2 className="text-sm text-gray-600 text-center mb-5">Log-in to access your account</h2></i>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded-md text-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded-md text-sm w-full"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center mt-1">{error}</p>}
          <input 
            type="submit" 
            value="Sign In" 
            className="mt-2 bg-blue-500 text-white p-2 rounded-lg text-sm cursor-pointer transition duration-300 ease-in-out hover:bg-blue-600"
          />
        </form>

        <p className="text-xs text-center text-gray-600 mt-3">
          Don't have an account? <a href="#" onClick={onSwitchToSignup} className="text-purple-700 hover:underline">Sign-up</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
