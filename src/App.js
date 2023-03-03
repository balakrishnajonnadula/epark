import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AddProducts from "./components/AddProducts";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/prouductlist" exact element={<ProductList />} />
          <Route path="/" exact element={<AddProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
