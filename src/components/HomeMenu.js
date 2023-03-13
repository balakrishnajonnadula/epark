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
              src="https://www.free-css.com/assets/files/free-css-templates/preview/page286/deni/assets/images/product-img.png"
              class="d-block w-100"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.free-css.com/assets/files/free-css-templates/preview/page283/ninom/assets/images/slider-img.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/0/AmazonStores/A21TJRUUN4KGV/f5c75ce073d42b388dec5ea57952d5f3.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.png"
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
