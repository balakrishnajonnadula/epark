import React from "react";
import { Link, Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />
     
      {/* <nav>
        <Link to='/'>Add </Link>
      </nav> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
