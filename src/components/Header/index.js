import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          height: "380px",
          //   border: "1px solid red",
          textAlign: "center",
          color: "white"
        }}
      >
        <div className="row" style={{ margin: "80px 0px" }}>
          <h5
            style={{
              color: "#fff",
              margin: "auto",
              fontFamily: "algerian",
              fontWeight: "bold"
            }}
          >
            ROAD HUNTER FOR BUSINESS ALLOWS YOU TO <br /> REACH 150,000+
            TRUCKERS IN A UNIQUE WAY
          </h5>
        </div>

        <div className="row" style={{ marginTop: "140px" }}>
          <div className="col-md-4">
            <i className="fa fa-star star" />
            <p>
              Convert road traffic to <br /> clients
            </p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-heart heart" />
            <p>
              Know what truckers love <br /> or hat
            </p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-map map" />
            <p>
              Instantly update ads <br /> banner with one click
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
