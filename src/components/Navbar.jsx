import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/letter-k.png";

export const Navbar = (props) => {
  const { token, setToken } = props;

  const deleteToken = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  return (
    <div className="navbarBlock fixed top-0 left-0 w-full flex justify-between z-10 bg-[#FFD8A9] shadow-lg font-prompt text-font-primary text-sm transition duration-300 px-4 p-2">
      <div className="flex items-center gap-x-4">
        <Link to="/">
          <img src={Logo} className="w-[35px]" />
        </Link>
        {/* <Link to="/">Home</Link> */}
        <Link to="/partner/main">Home (Partner)</Link>
      </div>
      <div className="flex items-center gap-x-4">
        <Link to="/partner/welcome">Partner</Link>
        {token ? (
          <Link to="/login" onClick={() => deleteToken()}>
            Log out
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};
