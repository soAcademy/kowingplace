import { Navbar } from "./components";
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
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/branch/:branchId" element={<Branch />} />
        <Route exact path="/reserve/:branchId" element={<Reserve />} />
        <Route exact path="/:typeUser/signup" element={<Signup />} />
        <Route exact path="/partner/welcome" element={<Welcome />} />
        <Route exact path="/partner/main" element={<Main />} />
        <Route
          exact
          path="/partner/setting/coworkingspace"
          element={<SettingCo />}
        />
        <Route exact path="/partner/setting/rooms" element={<SettingRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
