import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate user sign-up
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-lg w-full max-w-sm" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full mt-1 p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="w-full mt-1 p-2 border rounded" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;