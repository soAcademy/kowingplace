import React, { useState, useContext } from "react";
// import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ContextUserId } from "../App";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const nevigate = useNavigate();
  const { setUserId, setToken } = useContext(ContextUserId);
  const { typeUser } = useParams();
  console.log(typeUser);

  const urlImg =
    typeUser === "partner"
      ? "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      : "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  const typeURL =
    typeUser === "partner"
      ? "loginUserInternal"
      : typeUser === "user"
      ? "loginUserExternal"
      : "";
  const URL = `${import.meta.env.VITE_API_BACKEND}/kowing/${typeURL}`;
  // alert(URL);
  const Login = async () => {
    const fireLoginData = await axios.post(URL, {
      email: email,
      password: password,
    });
    //console.log("fireLogin", fireLoginData);
    if (fireLoginData.status === 200) {
      setToken(fireLoginData.data.token);
      // localStorage.setItem("token", fireLoginData.data.token);
      // localStorage.setItem(
      //   "userData",
      //   JSON.stringify(fireLoginData.data.userData)
      // );
      setUserId(fireLoginData.data.userData);
      if (typeUser === "user") {
        nevigate("/");
      } else {
        nevigate("/partner/main");
      }
    } else {
      alert("No Account");
    }
  };

  const validateLogin = (e) => {
    e.preventDefault();

    setEmail(email.includes("@") ? "" : "รูปแบบอีเมลล์ไม่ถูกต้อง");
    setPassword(password.length > 3 ? "" : "รหัสผ่านต้องมีมากกว่า 3 ตัว");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${urlImg})`,
      }}
      className="w-full h-screen bg-cover bg-no-repeat bg-[center_left_-15rem] md:bg-center flex justify-center items-center text-font-primary font-prompt text-sm p-4 pt-20"
    >
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center p-4">
        <div className="md:w-5/12 lg:w-1/3 flex flex-col gap-y-4 bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={validateLogin}>
            <h1 className="text-2xl text-center mb-2">LOGIN</h1>
            {typeUser === "partner" && <h1 className="text-center">Partner</h1>}
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
              <label className="w-full md:w-1/5">E-mail</label>
              <input
                type="email"
                className="w-full md:w-4/5 border-2 rounded-full p-2 px-4"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
              <label className="w-full md:w-1/5">Password</label>
              <input
                type="password"
                className="w-full md:w-4/5 border-2 rounded-full p-2 px-4"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="flex justify-between text-gray-400 text-[0.75rem] mb-2">
              <Link to={`/${typeUser}/forget`}>Forget Password</Link>
              <Link to={`/${typeUser}/signup`}>Create New Account</Link>
            </div>
            <button
              className="w-full font-medium bg-green-300 hover:bg-green-400 rounded-full duration-300 p-2 px-4"
              onClick={() => Login()}
            >
              Login
            </button>
            {/* <button className="w-full flex justify-center items-center gap-x-2">
            <p className="text-[0.75rem]">Login with</p>
            <FcGoogle className="text-3xl" />
          </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};
