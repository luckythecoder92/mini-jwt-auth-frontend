import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import withAuth from "../components/withAuth";
import { useEffect } from "react";

const UserDashboard = () => {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
const user = storedUser ? JSON.parse(storedUser) : null;
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
  const fetchUser = async () => {
    const res = await API.get("/auth/me");
    setUser(res.data);
  };
  fetchUser();
}, []);

  return (
    <div className="min-h-screen w-full bg-gray-100">

      
     <Navbar/>

      <div className="p-10 max-w-5xl mx-auto">

        
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold">User Dashboard</h2>
          <p className="text-gray-600 mt-2">
            Welcome, {user?.fullname}!
          </p>
        </div>

        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
            <p>My Tasks</p>
            <h3 className="text-3xl font-bold">5</h3>
          </div>

          <div className="bg-green-500 text-white p-6 rounded-lg shadow">
            <p>Notifications</p>
            <h3 className="text-3xl font-bold">3</h3>
          </div>
        </div>

        
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Your Information</h3>

          <div className="space-y-3">
            <p><strong>Name:</strong> {user?.fullname}</p>
            <hr />
            <p><strong>Email:</strong> {user?.email}</p>
            <hr />
            <p>
              <strong>Role:</strong>{" "}
              <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                {role}
              </span>
            </p>
          </div>
        </div>

        
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
          <p>
            {role === "Admin"
              ? "You have full system access."
              : role === "Manager"
              ? "You can manage users and tasks."
              : "You have basic access to your profile and tasks."}
          </p>
        </div>

        {/* 🔘 Conditional Buttons */}
        <div className="flex gap-4">
          {(role === "Manager" || role === "Admin") && (
            <button
              onClick={() => navigate("/manager")}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Go to Manager Dashboard
            </button>
          )}

          {role === "Admin" && (
            <button
              onClick={() => navigate("/admin")}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Go to Admin Dashboard
            </button>
          )}
        </div>

      </div>
    </div>
  );
};


export default withAuth(UserDashboard, ["User"]);