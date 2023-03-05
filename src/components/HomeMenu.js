import React from "react";

const HomeMenu = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/smartwatch-banner_23850478-e1e8-4dd6-b994-6a1659e9a3fe_1600x.jpg?v=1677938442"
              class="d-block w-100"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ezgif-4-e6f62730cc_1600x.gif?v=1677752123"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/999-Store-Desktop_1_1600x.jpg?v=1677239714FF"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="d-flex">
        <div className="col-lg-3 col-md-3 col-sm-12 box">Mobiles</div>
        <div className="col-lg-3 col-md-3 col-sm-12 box">Fashion</div>
        <div className="col-lg-3 col-md-3 col-sm-12 box">Laptops</div>
        <div className="col-lg-3 col-md-3 col-sm-12 box">Kitchen</div>
      </div>
    </div>
  );
};

export default HomeMenu;
