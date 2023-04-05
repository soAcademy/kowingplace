import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const { typeUser } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const bgPicture =
    typeUser === "partner"
      ? "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      : "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const textForUser =
    typeUser === "partner" ? "สำหรับผู้ประกอบการ" : "สำหรับผู้ใช้งานทั่วไป";
  const redirectPath =
    typeUser === "partner" ? "/partner/login" : "/user/login";

  const handleSignup = () => {
    const registration = async () => {
      const payload = {
        name: name,
        email: email,
        tel: phone,
        password: password,
      };

      const typeURL =
        typeUser === "partner"
          ? "createUserInternal"
          : typeUser === "user"
          ? "createUserExternal"
          : "";
      const fireSignup = await axios.post(
        `${import.meta.env.VITE_API_BACKEND}/kowing/${typeURL}`,
        payload
      );

      if (fireSignup.status === 200) {
        navigate(redirectPath);
      } else {
        console.log(fireSignup);
        alert("sign up fail");
      }
    };
    name !== "" &&
      email !== "" &&
      phone !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword &&
      registration();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgPicture})`,
      }}
      className="w-full h-screen bg-cover bg-no-repeat bg-[center_left_-15rem] md:bg-center flex justify-center items-center text-font-primary font-prompt text-sm p-4 pt-20"
    >
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center p-4">
        <div className="md:w-5/12 lg:w-1/3 flex flex-col gap-y-4 bg-white rounded-lg shadow-lg p-8">
          <div className="text-2xl text-center">
            <h1>Your Information</h1>
            <p className="text-sm">{textForUser}</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="w-full md:w-3/12">Name</label>
            <input
              type="string"
              className="w-full md:w-9/12 border-2 rounded-full p-2 px-4"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="w-full md:w-3/12">E-mail</label>
            <input
              type="email"
              className="w-full md:w-9/12 border-2 rounded-full p-2 px-4"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="w-full md:w-3/12">Phone</label>
            <input
              type="text"
              className="w-full md:w-9/12 border-2 rounded-full p-2 px-4"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="w-full md:w-3/12">Password</label>
            <input
              type="password"
              className="w-full md:w-9/12 border-2 rounded-full p-2 px-4"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="w-full md:w-3/12">Confirm Password</label>
            <input
              type="password"
              className="w-full md:w-9/12 border-2 rounded-full p-2 px-4"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <button
            className="w-full font-medium bg-green-300 hover:bg-green-400 rounded-full p-2 px-4"
            onClick={() => handleSignup()}
          >
            Sign-Up
          </button>
          {/* <button className="w-full flex justify-center items-center gap-x-2">
            <p className="text-[0.75rem]">Sign-Up with</p>
            <FcGoogle className="text-3xl" />
          </button> */}
        </div>
      </div>
    </div>
  );
};
