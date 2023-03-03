import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/Firebase";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const fetchPost = async () => {
    await getDocs(collection(db, "products"))
      .then((QuerySnapshot) => {
        const newData = QuerySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductList(newData);
        console.log(productList, newData);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return <div>
    Hello
  </div>;
};

export default ProductList;
