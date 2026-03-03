import React, { useState } from 'react'
import { loginUser } from '../../apis/authService';
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        email:"",
        password:""
    })
    const [error, setError] = useState("")
    
      function handleInput(e) {
        const {name, value} = e.target;
        setFormdata((prev) => ({ ...prev, [name]: value }));
      }
    
     async function handleSubmit(e){
        e.preventDefault();
        try {
            const res = await loginUser({
   
        email: formdata.email,
        password: formdata.password,
    
      });
    
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect based on role
      if (res.data.user.role === "Admin") {
        navigate("/admin");
      } else if (res.data.user.role === "Manager") {
        navigate("/manager");
      } else {
        navigate("/dashboard");
      }

        } catch (error) {
             setError(error.response?.data?.message || "Login failed");
             console.log(error)
        }
      }
      
  return (
      <div className="h-[50vh] rounded-md w-[30vw]  bg-white  flex flex-col p-4">
         <h1 className="text-center text-3xl font-semibold">Login</h1>
          {error && <p className="text-red-500 mb-3">{error}</p>}
         <form action="" onSubmit={handleSubmit} className='flex flex-col'>
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
            className="border border-gray-600 rounded-md mt-3 px-3 py-2"
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

            className="border border-gray-600 rounded-md mt-3 px-3 py-2"
          />
        </div>
        
        <button className='px-3 py-2 bg-blue-600 text-white rounded-md text-xl '>Login</button>
         </form>
               <p className="mt-3 text-center   "> Don’t have an account? <Link to="/register" className='text-blue-700 font-semibold '>Register</Link> 
      </p>
        </div>
  )
}

export default LoginPage