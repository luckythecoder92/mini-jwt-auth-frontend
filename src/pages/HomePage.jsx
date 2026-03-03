import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen w-screen bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600 text-white">

      
      <Navbar/>

      
      <div className="flex flex-col items-center justify-center text-center mt-20 px-6">
        <h2 className="text-5xl font-bold mb-6">
          JWT Authentication System
        </h2>

        <p className="text-xl mb-10">
          Role-Based Access Control with MERN Stack
        </p>

        
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg w-full max-w-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Features
          </h3>

          <ul className="space-y-4 text-left">
            <li>✅ Secure JWT token-based authentication</li>
            <li>✅ Three role levels: User, Manager, and Admin</li>
            <li>✅ Protected routes with role-based authorization</li>
            <li>✅ Responsive design with Tailwind CSS</li>
          </ul>
        </div>

        
        <div className="mt-10 space-x-6">
          <Link
            to="/login"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-green-500 px-6 py-3 rounded-md font-semibold"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;