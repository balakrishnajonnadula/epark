import { Link } from "react-router-dom";
import "../styles/footer.css"

const Footer = () => {
  return (
    <div>
      <footer>
        <div style={{ minHeight: "250px" }} className="footer" id="footer-sub">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5> HELP </h5>
                <ul>
                  <li>
                    <Link href="">Payments</Link>
                    <hr />
                  </li>
                  <li>
                    <Link href="">Saved Cards</Link>
                    <hr />
                  </li>
                  <li>
                    <Link href="">Shipping</Link>
                    <hr />
                  </li>
                  <li>
                    <Link href="">Cancellation & Returns</Link>
                    <hr />
                  </li>
                  <li>
                    <Link href="">FAQ</Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <h5> COMPANY NAME </h5>
                <ul>
                  <li>
                    <Link href="">Contact Us</Link>
                    <hr />
                  </li>
                  <li>
                    <Link href="">About Us</Link>
                    <hr />
                  </li>
                  <li>
                    <Link href="">Careers</Link>
                    <hr />
                  </li>
                  <li>
                    <Link href="">Press</Link>
                    <hr />
                  </li>
                  <li>
                    <Link href="">Sell on our website</Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <h5> MISC </h5>
                <ul>
                  <li>
                    <Link href="">Online Shopping</Link>
                    <hr />
                  </li>
                  <li>
                    <Link href="">Affliate Program</Link>
                    <hr />
                  </li>
                  <li>
                    <Link href="">Gift Card</Link>
                    <hr />
                  </li>
                  <li>
                    <Link href="">Subscription</Link>
                    <hr />
                  </li>
                  <li>
                    <Link href="">Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>

            <hr
              style={{ marginBottom: "0px", marginTop: "30px", padding: "0px" }}
            />
            <div className="row" id="sub-two">
              <div className="col-md-4">
                <div className="vertical-line text-center">
                  <span className="glyphicon glyphicon-map-marker"></span>
                  <h4>TRACK YOUR ORDER</h4>
                </div>
              </div>

              <div className="col-md-4">
                <div className="vertical-line text-center">
                  <span className="glyphicon glyphicon-refresh"></span>
                  <h4>FREE & EASY RETURNS</h4>
                </div>
              </div>

              <div className="col-md-4">
                <div style={{ margin: "8px" }} className="text-center">
                  <span className="glyphicon glyphicon-remove-circle"></span>
                  <h4 style={{ color: "#6d6c6c" }}>ONLINE CANCELLATIONS</h4>
                </div>
              </div>
            </div>
            <hr
              style={{ marginBottom: "30px", marginTop: "0px", padding: "0px" }}
            />
          </div>
        </div>
        <div style={{ minHeight: "50px" }} id="footer-main">
          <ul>
            <li>
              <Link href="">
                <b>About Us</b>
              </Link>
            </li>
            <li>
              <Link href="">
                <b>Partner with us</b>
              </Link>
            </li>
            <li>
              <Link href="">
                <b>Terms & Conditions</b>
              </Link>
            </li>
            <li>
              <Link href="">
                <b>Blog</b>
              </Link>
            </li>
            <li>
              <Link href="">
                <b>Customer Service</b>
              </Link>
            </li>
          </ul>

          <div id="social-menu">
            <ul>
              <li>
                <Link href="">
                  <img
                    style={{ maxWidth: "18px", marginTop: "-7px" }}
                    src=""
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <img
                    style={{ maxWidth: "18px", marginTop: "-7px" }}
                    src=""
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <img
                    style={{ maxWidth: "18px", marginTop: "-7px" }}
                    src=""
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
