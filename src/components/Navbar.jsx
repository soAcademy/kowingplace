import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/letter-k.png";
import { ContextUserId } from "../App";
import { FaSignInAlt, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

export const Navbar = () => {
  const { userId, setUserId, setToken } = useContext(ContextUserId);

  // useEffect(() => {
  //   try {
  //     setUserId(JSON.parse(localStorage.getItem("userData")));
  //   } catch (error) {
  //     // console.log("error", error);
  //     deleteToken();
  //   }
  // }, []);

  const deleteToken = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setUserId({});
    setToken("");
  };

  return (
    <div className="navbarBlock fixed top-0 left-0 w-full flex justify-between z-10 bg-[#FFD8A9] shadow-lg font-medium font-prompt text-font-primary text-sm transition duration-300 px-4 p-2">
      <div className="flex items-center gap-x-4">
        <Link to="/">
          <img src={Logo} className="w-[35px]" />
        </Link>
        <Link to="/" className="hover:text-gray-800">
          Home
        </Link>
        <Link
          to={`/partner/${userId?.role === "partner" ? "main" : "welcome"}`}
          className="hover:text-gray-800"
        >
          Partner
        </Link>
      </div>
      <div className="flex items-center">
        {userId?.userId > 0 ? (
          <div className="flex gap-x-4">
            <div className={`${userId?.role === "user" ? "block" : "hidden"}`}>
              <Link to="/user/reservation" className="">
                Reservation
              </Link>
            </div>
            <div className="relative group">
              <div className="flex items-center gap-x-2">
                <FaUserCircle size={20} />
                {userId.name}
              </div>
              <Link
                to="/"
                onClick={() => deleteToken()}
                className="hidden group-hover:flex items-center gap-x-2 absolute z-10 top-1/3 right-4 bg-orange-400 text-white rounded-md px-4 py-2 text-sm whitespace-nowrap cursor-pointer"
              >
                Logout
                <FaSignOutAlt />
              </Link>
            </div>
          </div>
        ) : (
          <Link
            to="/user/login"
            className="flex items-center gap-x-2 hover:text-gray-800"
          >
            <FaSignInAlt />
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
