import React from "react";
import Navbar from "../components/Navbar";
import withAuth from "../components/withAuth";

const ManagerDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = localStorage.getItem("role");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-10 max-w-5xl mx-auto">

        {/* Header Card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-purple-600">
            Manager Dashboard
          </h2>
          <p className="text-gray-600 mt-2">
            Welcome, {user?.fullname}!
          </p>
        </div>

        {/* Manager Stats */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow">
            <p>Team Members</p>
            <h3 className="text-3xl font-bold">12</h3>
          </div>

          <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
            <p>Active Tasks</p>
            <h3 className="text-3xl font-bold">18</h3>
          </div>

          <div className="bg-green-500 text-white p-6 rounded-lg shadow">
            <p>Completed Tasks</p>
            <h3 className="text-3xl font-bold">42</h3>
          </div>
        </div>

        {/* Manager Information */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Manager Information
          </h3>

          <div className="space-y-3">
            <p><strong>Name:</strong> {user?.fullname}</p>
            <hr />
            <p><strong>Email:</strong> {user?.email}</p>
            <hr />
            <p>
              <strong>Role:</strong>{" "}
              <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">
                {role}
              </span>
            </p>
          </div>
        </div>

        {/* Access Message */}
        <div className="bg-purple-100 border-l-4 border-purple-500 p-4">
          <p>
            You can manage your assigned team and monitor tasks.
          </p>
        </div>

      </div>
    </div>
  );
};

export default withAuth(ManagerDashboard, ["Manager", "Admin"]);