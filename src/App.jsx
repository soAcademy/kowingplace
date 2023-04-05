import { Navbar } from "./components";
import { useState, createContext, useEffect } from "react";
import {
  Home,
  Branch,
  Reserve,
  Login,
  Signup,
  Welcome,
  Main,
  SettingRoom,
  SettingCo,
  SettingTime,
  Reservation,
  ForgetPwd,
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Status } from "./pages/internal/Status";

export const ContextUserId = createContext();

export const App = () => {
  const [userId, setUserId] = useState({}); //
  const [token, setToken] = useState({});

  useEffect(() => {
    try {
      setUserId(JSON.parse(localStorage.getItem("userData")));
      setToken(localStorage.getItem("token"));
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  useEffect(() => {
    token != null && Object.keys(token).length > 1 && localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    userId != null && Object.keys(userId).length > 1 && localStorage.setItem("userData", JSON.stringify(userId));
  }, [userId]);

  return (
    <BrowserRouter>
      <ContextUserId.Provider value={{ userId, setUserId, token, setToken }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:typeUser/login/" element={<Login />} />
          <Route exact path="/:typeUser/forget/" element={<ForgetPwd />} />
          <Route exact path="/branch/:coWorkId" element={<Branch />} />
          <Route exact path="/reserve/:coWorkId" element={<Reserve />} />
          <Route exact path="/:typeUser/signup" element={<Signup />} />
          <Route exact path="/user/reservation" element={<Reservation />} />
          <Route exact path="/partner/welcome" element={<Welcome />} />
          <Route exact path="/partner/main" element={<Main />} />
          <Route
            exact
            path="/partner/setting/coworkingspace"
            element={<SettingCo />}
          />
          <Route
            exact
            path="/partner/setting/rooms"
            element={<SettingRoom />}
          />
          <Route exact path="/partner/setting/time" element={<SettingTime />} />
          <Route exact path="/partner/status/:status" element={<Status />} />
        </Routes>
      </ContextUserId.Provider>
    </BrowserRouter>
  );
};
