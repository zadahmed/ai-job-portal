import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-teal-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;