import React, { useEffect, useState } from "react";
import { CaretRightFill } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/components.css";
import "../styles/Login.css";
const Login = () => {
  const [users, setUsers] = useState([]);
  const [uname, setUname] = useState("");
  const [pass, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {}, []);

  const onSubmit = (e) => {
    e.preventDefault(e);
    // users.filter((user, index) => {
    if (uname === "jbk" && pass === "jbk123") {
      toast.success("Login success", { position: "top-right" });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      navigate("/");
    }
  };
  return (
    <div>
      {/* <p>{users.map((value,index)=> <ul><li>{value.name}</li></ul>)}</p> */}
      <div className="loginimage">
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
                    <div className="d-flex justify-content-center">
                      <img
                        src="https://img.icons8.com/fluency/720/null/guest-male.png"
                        className="img-fluid shadow-2-strong mb-3"
                        width={"150px"}
                        alt={"Logo"}
                      />
                    </div>
                    <form
                      onSubmit={(e) => {
                        onSubmit(e);
                      }}
                    >
                      <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input
                          type={"text"}
                          className="form-control"
                          placeholder="Enter username"
                          value={uname}
                          onChange={(e) => {
                            setUname(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input
                          type={"password"}
                          className="form-control"
                          placeholder="Enter password"
                          value={pass}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                      <button className="btn btn-primary w-100 mb-3">
                        Login
                      </button>
                      <div className="">
                        <div className="p-2 form-text">
                          <p>
                            New User need an account &nbsp;
                            <Link to="/register">
                              Sing up <CaretRightFill />
                            </Link>
                          </p>
                        </div>
                        <div className="text-danger p-2">Forgot Password</div>
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

export default Login;
