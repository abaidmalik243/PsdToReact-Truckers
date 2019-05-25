import React, { Component } from "react";
import location from "../../images/location.PNG";
import GoogleMap from "../GoogleMap";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "lightgrey",
          textAlign: "center",
          color: "black"
        }}
      >
        <div className="row" style={{ padding: "20px 0px" }}>
          <div className="col-md-6">
            <GoogleMap />
            {/* <img
              src={location}
              style={{
                width: "80%",
                margin: "10px"
              }}
            /> */}
          </div>
          <div className="col-md-6">
            <div style={{ padding: "20px", textAlign: "left" }}>
              <h4>
                <strong style={{ borderBottom: "2px solid black" }}>
                  Login
                </strong>
              </h4>
              <form style={{ marginTop: "30px" }}>
                <div class="wrapper">
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
                  <span class="fa fa-envelope errspan" />
                </div>

                <div class="wrapper">
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
                  <span class="fa fa fa-lock errspan" />
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
        </div>

        <div className="row contactUs">
          <div className="col-md-12">
            <h5>
              CAN'T FIND A PLA THAT FITS YOUR NEEDS? <br /> CONTACT US AND GET
              FIND OUT MORE
            </h5>
          </div>

          <div className="col-md-12">
            <input type="button" value="CONTACT US" />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
