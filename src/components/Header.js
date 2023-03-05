import { Cart3 } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="section-header">
        <nav className="navbar navbar-dark navbar-expand p-0 bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav d-none d-md-flex mr-auto">
              <li className="nav-item">
                <Link className="nav-link" href="#" data-abc="true">
                  Cash On Delivery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" data-abc="true">
                  Free Delivery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" data-abc="true">
                  Cash Backs
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <div className="d-flex flex-row">
                  <img
                    src="https://i.imgur.com/EYFtR83.jpg"
                    className="rounded-circle"
                    width="30"
                    alt=""
                  />
                </div>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link d-flex align-items-center"
                  data-abc="true"
                >
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </Link>
                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="/login">
                          login
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          profile
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- container //  --> */}
        </nav>

        <section className="header-main border-bottom bg-white">
          <div className="container-fluid">
            <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
              <div className="col-md-2">
                <Link to={"/"}>
                  <img
                    className="d-none d-md-flex"
                    alt="EPark"
                    title="EPark"
                    src="https://s3.amazonaws.com/passport-static-us/whitelabel/epark/images/applogo.png"
                    width="100"
                    height="50"
                  />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="d-flex form-inputs">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search any product..."
                  />
                  <i className="bx bx-search"></i>
                </div>
              </div>

              <div className="col-md-2">
                <div className="d-flex d-none d-md-flex flex-row align-items-center">
                  <span className="shop-bag">
                    <i className="bx bxs-shopping-bag"></i>
                  </span>
                  <Link to={"cart"}>
                    <div className="d-flex flex-column ms-2">
                      <p
                        
                        className="btn btn-primary position-relative"
                      >
                        <Cart3/>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          11+
                          <span className="visually-hidden">unread messages</span>
                        </span>
                      </p>
                      {/* <span className="fw-bold">$27.90</span> */}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand d-md-none d-md-flex" alt="" href="#">
              Categories
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Electronics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Fashion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Furnitures
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mobiles
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" href="#">
                        Smart Phones
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Feature Phones
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Mobile Covers
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Header;
