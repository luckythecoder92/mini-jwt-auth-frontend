import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
   const handleNav = ()=>{
    navigate("/")
   }

  return (
    <div className="bg-blue-600 w-screen text-white flex justify-between items-center px-8 py-4">
        
      <h1 className="text-xl font-semibold cursor-pointer" onClick={handleNav}>JWT Auth System</h1>
        

      <div className="flex items-center gap-6">
        <p>
          Welcome, {user?.fullname} ({role})
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;