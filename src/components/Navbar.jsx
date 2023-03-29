import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/letter-k.png";
import { ContextUserId } from "../App";
import { FaUserCircle } from "react-icons/fa";

export const Navbar = () => {
  const { userData } = useContext(ContextUserId);
  console.log("userData", userData, Object.keys(userData).length > 0);

  return (
    <div className="navbarBlock fixed top-0 left-0 w-full flex justify-between z-10 bg-[#FFD8A9] shadow-lg font-prompt text-font-primary text-sm transition duration-300 px-4 p-2">
      <div className="flex items-center gap-x-4">
        <Link to="/">
          <img src={Logo} className="w-[35px]" />
        </Link>
        <Link to="/partner/main">Home (Partner)</Link>
        <Link to="/partner/welcome">Partner</Link>
      </div>
      <div className="flex items-center font-medium gap-x-4">
        {Object.keys(userData).length > 0 ? (
          <Link to="/" className="flex items-center gap-x-2"><FaUserCircle size={20}/>{userData.name}</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};
