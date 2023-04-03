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
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Status } from "./pages/internal/Status";

export const ContextUserId = createContext();

export const App = () => {
  const [userId, setUserId] = useState({}); //
  const [token, setToken] = useState(null);
  const getLocalToken = localStorage.getItem("token");

  useEffect(() => {
    try {
      setUserId(JSON.parse(localStorage.getItem("userData")));
    } catch (error) {
      // console.log("error", error);
      // deleteToken();
    }
  }, []);

  useEffect(() => {
    setToken(getLocalToken);
  }, [getLocalToken]);

  return (
    <BrowserRouter>
      <ContextUserId.Provider value={{ userId, setUserId, token, setToken }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:typeUser/Login/" element={<Login />} />
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
