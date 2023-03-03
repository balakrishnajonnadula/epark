import { BrowserRouter, Route,  Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddProducts from "./components/AddProducts";
import ProductList from "./components/ProductList";
import ViewProduct from "./components/ViewProduct";
import '/node_modules/react-toastify/dist/ReactToastify.min.css';


function App() {
  return (
    <div className="">
      <ToastContainer >
        <BrowserRouter>
          <Routes>
            <Route path="/prouductlist" exact element={<ProductList />} />

            <Route path="/" exact element={<AddProducts />} />
            <Route path="/viewproduct" element={<ViewProduct />} />
          </Routes>
        </BrowserRouter>
      </ToastContainer>
    </div>
  );
}

export default App;
