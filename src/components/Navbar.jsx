import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbarBlock fixed top-0 left-0 w-full flex justify-between z-10 bg-[#FFD8A9] shadow-lg font-prompt text-font-primary text-sm p-4">
      <div className="flex gap-x-8">
        <div>logo</div>
        <Link to="/">Home</Link>
        <Link to="/partner/main">Home (Partner)</Link>
      </div>
      <div className="flex gap-x-8">
        <Link to="/partner/welcome">Partner</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
