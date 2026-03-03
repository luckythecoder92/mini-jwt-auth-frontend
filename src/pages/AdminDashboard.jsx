import React from "react";
import Navbar from "../components/Navbar";
import withAuth from "../components/withAuth";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const role = localStorage.getItem("role");

  return (
    <div className="h-full  bg-gray-100">
      <Navbar />

      <div className="min-w-6xl mx-auto p-8">

        {/* 🔴 Top Banner */}
        <div className="bg-linear-to-r from-red-500 to-pink-600 text-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <p className="mt-1">
            Welcome, {user?.fullname}! You have full system control.
          </p>
        </div>

        {/* 📊 Stats Row */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-blue-500">
            <p className="text-gray-500">Total Users</p>
            <h3 className="text-2xl font-bold">100</h3>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-purple-500">
            <p className="text-gray-500">Total Managers</p>
            <h3 className="text-2xl font-bold">15</h3>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-red-500">
            <p className="text-gray-500">Total Admins</p>
            <h3 className="text-2xl font-bold">3</h3>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-500">
            <p className="text-gray-500">System Health</p>
            <h3 className="text-2xl font-bold text-green-600">Good</h3>
          </div>
        </div>

        {/* 🧩 Actions + Activities */}
        <div className="grid grid-cols-2 gap-6 mb-6">

          {/* Admin Actions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Admin Actions</h3>

            <div className="space-y-3">
              <div className="bg-blue-100 p-3 rounded">
                <p className="font-semibold text-blue-700">Manage Users</p>
                <p className="text-sm text-gray-600">
                  Add, edit, or remove users
                </p>
              </div>

              <div className="bg-purple-100 p-3 rounded">
                <p className="font-semibold text-purple-700">
                  System Settings
                </p>
                <p className="text-sm text-gray-600">
                  Configure system preferences
                </p>
              </div>

              <div className="bg-green-100 p-3 rounded">
                <p className="font-semibold text-green-700">View Logs</p>
                <p className="text-sm text-gray-600">
                  Access system audit logs
                </p>
              </div>

              <div className="bg-red-100 p-3 rounded">
                <p className="font-semibold text-red-700">
                  Security Settings
                </p>
                <p className="text-sm text-gray-600">
                  Manage security configurations
                </p>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">
              Recent Admin Activities
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>• User account created (2 hours ago)</li>
              <li>• System backup completed (5 hours ago)</li>
              <li>• Security patch applied (1 day ago)</li>
              <li>• Database optimized (2 days ago)</li>
            </ul>
          </div>
        </div>

        {/* 👤 Admin Info */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="text-lg font-semibold mb-4">
            Admin Information
          </h3>

          <div className="grid grid-cols-3 gap-6">
            <p><strong>Name:</strong> {user?.fullname}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p>
              <strong>Role:</strong>{" "}
              <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm">
                {role}
              </span>
            </p>
          </div>
        </div>

        {/* ⚠ Access Warning */}
        <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-700 text-sm">
            Admin Access Level: You have complete access to all system
            features, user management, and configurations. Use this power
            responsibly.
          </p>
        </div>

        {/* 🔘 Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            View User Dashboard
          </button>

          <button
            onClick={() => navigate("/manager")}
            className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700"
          >
            View Manager Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};

export default withAuth(AdminDashboard, ["Admin"]);