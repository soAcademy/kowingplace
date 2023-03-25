import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const nevigate = useNavigate();

  const Login = async () => {
    const fireLoginData = await axios.post(
      `${import.meta.env.VITE_API_BACKEND}/kowing/loginUserExternal`,
      {
        email: email,
        password: password,
      }
    );

    if (fireLoginData.status === 200) {
      localStorage.setItem("token", fireLoginData.data.token);
      nevigate("/");
    } else {
      alert("No Account");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`,
      }}
      className="w-full h-screen bg-cover bg-no-repeat bg-[center_left_-15rem] md:bg-center flex justify-center items-center text-font-primary font-prompt text-sm p-4 pt-20"
    >
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center p-4">
        <div className="md:w-2/5 flex flex-col gap-y-4 bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl text-center">LOGIN</h1>
          <div className="flex items-center gap-x-2">
            <label className="w-1/5">E-mail</label>
            <input
              type="email"
              className="w-4/5 border-2 rounded-full p-2 px-4"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex items-center gap-x-2">
            <label className="w-1/5">Password</label>
            <input
              type="password"
              className="w-4/5 border-2 rounded-full p-2 px-4"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex justify-between text-gray-400 text-[0.75rem]">
            <a href="#">Forget Password</a>
            <Link to="/customer/signup">Create New Account</Link>
          </div>
          <button
            className="w-full font-medium bg-green-300 hover:bg-green-400 rounded-full p-2 px-4"
            onClick={() => Login()}
          >
            Login
          </button>
          <button className="w-full flex justify-center items-center gap-x-2">
            <p className="text-[0.75rem]">Login with</p>
            <FcGoogle className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
