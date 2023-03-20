import { Navbar } from "./components";
import { Home, Branch, Reserve, Login } from "./pages";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
