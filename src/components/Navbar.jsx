import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/letter-k.png";
import { ContextUserId } from "../App";

export const Navbar = (props) => {
  const { token, setToken } = props;
  const { userId, setUserId } = useContext(ContextUserId);

  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const deleteToken = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setUserId({});
  };
  return (
    <div className="navbarBlock fixed top-0 left-0 w-full flex justify-between z-10 bg-[#FFD8A9] shadow-lg font-prompt text-font-primary text-sm transition duration-300 px-4 p-2">
      <div className="flex items-center gap-x-4">
        <Link to="/">
          <img src={Logo} className="w-[35px]" />
        </Link>
        <Link to="/partner/main">Home (Partner)</Link>
        <Link to="/partner/welcome">Partner</Link>
        {userId.userId !== null ? (
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
