import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
// import AddProducts from "./components/AddProducts";
import Dashboard from "./components/Dashboard";

import Home from "./components/Home";
import HomeMenu from "./components/HomeMenu";
import Login from "./components/Login";
import Register from "./components/Register";

import "/node_modules/react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}>
            <Route path="/" exact element={<HomeMenu />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
