import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../apis/authService";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role:"User"
  });
  const [error, setError] = useState("");

  function handleInput(e) {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (formdata.password !== formdata.confirmPassword) {
      setError("Password do not match!");
      return;
    }

    setError("");
    try {
      const res = await registerUser({
        fullname: formdata.fullname,
        email: formdata.email,
        password: formdata.password,
        role:formdata.role
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
      if (res.data.user.role === "Admin") {
        navigate("/admin");
      } else if (res.data.user.role === "Manager") {
        navigate("/manager");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    }
  }

  return (
    <div className="h-[84vh] w-[30vw] p-5 bg-white rounded-md">
      <h1 className="text-center text-3xl font-semibold">Register</h1>
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-5">
          {error && (
            <p className="text-red-500 mb-3 mt-3 text-center">{error}</p>
          )}
          <label htmlFor="" className="font-semibold">
            Full name
          </label>
          <input
            type="text"
            value={formdata.fullname}
            onChange={(e) => handleInput(e)}
            name="fullname"
            placeholder="Enter your full name"
            className="border border-gray-600 rounded-md mt-1 px-3 py-2"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="" className="font-semibold">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            onChange={(e) => handleInput(e)}
            value={formdata.email}
            placeholder="Enter your email"
            className="border border-gray-600 rounded-md mt-1 px-3 py-2"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleInput(e)}
            placeholder="Enter password"
            value={formdata.password}
            className="border border-gray-600 rounded-md mt-1 px-3 py-2"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="" className="font-semibold">
            Cofirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            value={formdata.confirmPassword}
            onChange={(e) => handleInput(e)}
            className="border border-gray-600 rounded-md mt-1 px-3 py-2"
          />
        </div>
        <div className="flex flex-col mb-5">
  <label className="font-semibold">Role</label>

  <select
    name="role"
    value={formdata.role}
    onChange={handleInput}
    className="border border-gray-600 rounded-md mt-1 px-3 py-2"
  >
    <option value="User">User</option>
    <option value="Manager">Manager</option>
    <option value="Admin">Admin</option>
  </select>
  </div>
        <button className="py-3 px-5 rounded-md text-xl cursor-pointer bg-blue-600 text-white">
          Register
        </button>
      </form>
      <p className="mt-3 text-center">
        Already have an account?
        <Link to="/login" className="text-blue-700 font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
