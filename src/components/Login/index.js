import React, { Component } from "react";
// import location from "../../images/location.PNG";
import GoogleMap from "../GoogleMap";
import "./style.css";

class Login extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white", height: "650px" }}>
        <div className="row">
          <div className="col-md-6" style={{ minHeight: "653px" }}>
            <GoogleMap />

            {/* <img
              src={location}
              style={{
                width: "100%"
              }}
            /> */}

            {/* end google map */}
          </div>
          {/* end 1st col */}
          <div className="col-md-6" style={{ paddingTop: "100px" }}>
            <div className="login_main">
              <h4>
                <strong style={{ borderBottom: "2px solid black" }}>
                  Login
                </strong>
              </h4>
              <form style={{ marginTop: "30px" }}>
                <div className="wrapper">
                  <input
                    type="text"
                    placeholder="Email"
                    style={{
                      width: "70%",
                      marginTop: "10px",
                      padding: "10px",
                      paddingLeft: "40px"
                    }}
                  />
                  <span className="fa fa-envelope errspan" />
                </div>

                <div className="wrapper">
                  <input
                    type="text"
                    placeholder="Password"
                    style={{
                      width: "70%",
                      marginTop: "10px",
                      padding: "10px",
                      paddingLeft: "40px"
                    }}
                  />
                  <span className="fa fa fa-lock errspan" />
                </div>

                <input
                  type="button"
                  value="SIGN IN"
                  style={{
                    width: "35%",
                    marginTop: "10px",
                    padding: "10px",
                    color: "white",
                    backgroundColor: "#5297D6",
                    borderColor: "#5297D6"
                  }}
                />

                <span style={{ fontSize: "18px", marginLeft: "10px" }}>
                  <a href="javascript:void(0)">Reset Password</a>
                </span>
                <p style={{ marginTop: "10px" }}>
                  Now to Road Hunter Business?{" "}
                  <a href="javascript:void(0)">Sign Up</a>
                </p>
              </form>
            </div>
          </div>
          {/* end 2nd col */}
          {/* <div className="col-md-3" /> */}

          {/* 3rd col */}
        </div>
        {/* end row */}
      </div>
    );
  }
}

export default Login;
