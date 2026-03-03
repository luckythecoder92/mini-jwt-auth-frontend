import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
   const handleNav = ()=>{
    navigate("/")
   }

return (
  <div className="bg-blue-600 text-white flex justify-between items-center px-8 py-4">
    <h1 className="text-xl font-bold">JWT Auth</h1>

    {token ? (
      <div className="flex items-center gap-5">
        <p>
          Welcome, {user?.fullname} ({user?.role})
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>
    ) : (
      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-white text-blue-600 px-4 py-2 rounded-md"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-green-500 px-4 py-2 rounded-md"
        >
          Register
        </Link>
      </div>
    )}
  </div>
);
}

export default Navbar