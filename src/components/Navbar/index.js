import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar_setting">
          <a className="navbar-brand" href="#">
            <h3
              style={{
                color: "white",
                fontFamily: "algerian",
                fontWeight: "bold"
              }}
            >
              TRUCKERS
            </h3>
          </a>
          <div className="row">
            <div className="col col-md-5 col-sm-3 col-xs-3">
              <button className="btn logout_btn" type="button">
                Watch Demo
              </button>
            </div>
            <div className="col col-md-4 col-sm-3 col-xs-3">
              <button className="btn logout_btn" type="button">
                {/* <a href="/#/login" >
                  Log in
                </a> */}
                <Link to="/login" style={{ color: "black" }}>
                  Log in
                </Link>
              </button>
            </div>
            <div className="col col-md-3 col-sm-3 col-xs-3">
              <button className="btn logout_btn" type="button">
                <a href="javascript:void(0)" style={{ color: "black" }}>
                  Sign&nbsp;up
                </a>
              </button>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
