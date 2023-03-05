import React from "react";
import { CaretRightFill, Info } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="logo">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-2 col-sm-0"></div>
            <div className="col-lg-4 col-md-8 col-sm-12 ">
              {/* style={{ width: "18rem"}} */}
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "100vh" }}
              >
                <div className="card w-100">
                  <div className="">
                    <div className="text-center p-3">
                      <Link to="/">
                        <img
                          className="text-center"
                          src="https://s3.amazonaws.com/passport-static-us/whitelabel/epark/images/applogo.png"
                          width={100}
                          alt="EPark"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="fs-3 pb-4 text-center">
                      <h1>Create Account</h1>
                    </div>
                    <form
                      className=""
                      onSubmit={(e) => {
                        // onSubmit(e);
                      }}
                    >
                      <div className="mb-3">
                        <label className="form-label">Your name</label>
                        <input
                          type={"text"}
                          className="form-control"
                          placeholder="First and last name"
                          //   value={uname}
                          onChange={(e) => {
                            // setUname(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-lg-5 col-md-4 col-sm-12">
                            <label className="form-label">Mobile number</label>
                            <select
                              className="form-select"
                              id="validationCustom04"
                            >
                              <option selected disabled value="">
                                Choose...
                              </option>
                              <option> IN +91</option>
                              <option>+32</option>
                              <option>...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div className="col-lg-7 col-md-8 col-sm-12">
                            <label className="form-label">&nbsp;</label>
                            <input
                              className="form-control"
                              type={"text"}
                              placeholder="Mobile number"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type={"password"}
                          className="form-control"
                          placeholder="At least 6 characters"
                          //   value={uname}
                          onChange={(e) => {
                            // setUname(e.target.value);
                          }}
                        />
                        <div id="emailHelp" className="form-text">
                          <Info size={25} color="#82B1FA" /> Passwords must be
                          at least 6 characters.
                        </div>
                      </div>
                      <div className="mb-3 form-text px-1">
                        <p>
                          By enrolling your mobile phone number, you consent to
                          receive automated security notifications via text
                          message from EPark. Message and data rates may apply.
                        </p>
                      </div>
                      <button
                        className="btn btn-primary w-100 mb-3"
                        onClick={(e) => {}}
                      >
                        Continue
                      </button>
                      <hr></hr>
                      <div className="form-text">
                        <p>
                          Already have an account?{" "}
                          <Link to="/login">
                            Sing in <CaretRightFill />
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-2 col-sm-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
