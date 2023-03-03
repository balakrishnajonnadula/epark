import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase/Firebase";

const AddProducts = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const ref = doc(db, "products", id);
    const data = { id, name, qty, price };
    setDoc(ref, data)
      .then(() => {
        // alert("Product added..!");
        toast.success("Product added..!");
      })
      .catch((error) => {
        toast.error(error);
      });
    setTimeout(() => {
      navigate("/prouductlist");
    }, 1200);
  };
  return (
    <div className="container">
      <div className="card ">
        <div className="card-header">
          <h1>Add Product</h1>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Enter Id</label>
              <input
                className="form-control"
                type={"text"}
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Enter Name</label>
              <input
                className="form-control"
                type={"text"}
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Enter Qty</label>
              <input
                className="form-control"
                type={"text"}
                defaultValue={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Enter Price</label>
              <input
                className="form-control"
                type={"text"}
                defaultValue={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
