'use client'
import React, { useState } from 'react';
//import { useRouter } from 'next/navigation';
import { useAuth } from '../AuthContext'; 
import { Router } from 'next/router';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    login(); // Update the context to reflect that user is logged in
    Router.push('/'); // Redirect the user to the homepage

    console.log('Username/Email:', usernameOrEmail);
    console.log('Password:', password);
  
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Login to Ai-Data</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usernameOrEmail">
            Username or Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usernameOrEmail"
            type="text"
            placeholder=" "
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full px-4 py-2 text-white bg-btg-maroon rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
