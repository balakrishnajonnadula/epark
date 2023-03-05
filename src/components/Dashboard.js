import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse visible-xs">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" href="#">
              Logo
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link href="#">Dashboard</Link>
              </li>
              <li>
                <Link href="#">Age</Link>
              </li>
              <li>
                <Link href="#">Gender</Link>
              </li>
              <li>
                <Link href="#">Geo</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-3 sidenav hidden-xs">
            <h2>Logo</h2>
            <ul className="nav nav-pills nav-stacked">
              <li className="active">
                <a href="#section1">Dashboard</a>
              </li>
              <li>
                <a href="#section2">Age</a>
              </li>
              <li>
                <a href="#section3">Gender</a>
              </li>
              <li>
                <a href="#section3">Geo</a>
              </li>
            </ul>
            <br />
          </div>
          <br />

          <div className="col-sm-9">
            <div className="well">
              <h4>Dashboard</h4>
              <p>Some text..</p>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className="well">
                  <h4>Users</h4>
                  <p>1 Million</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="well">
                  <h4>Pages</h4>
                  <p>100 Million</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="well">
                  <h4>Sessions</h4>
                  <p>10 Million</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="well">
                  <h4>Bounce</h4>
                  <p>30%</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="well">
                  <p>Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="well">
                  <p>Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="well">
                  <p>Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                <div className="well">
                  <p>Text</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="well">
                  <p>Text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
