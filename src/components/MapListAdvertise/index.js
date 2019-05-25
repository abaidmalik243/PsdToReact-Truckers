import React, { Component } from "react";
import location from "../../images/location.PNG";
import "./style.css";

class MapListAdvertise extends Component {
  render() {
    return (
      <div
        style={{
          // border: "1px solid red",
          backgroundColor: "white",
          textAlign: "center",
          color: "black"
        }}
      >
        <div
          className="row"
          style={{ padding: "20px 0px", marginRight: "0px" }}
        >
          <div className="col-md-6">
            <img
              src={location}
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                margin: "10px"
              }}
            />
          </div>
          <div className="col-md-6" style={{ textAlign: "left" }}>
            <h5>
              <strong>Advertise Your Business</strong>
            </h5>
            <ul
              style={{
                marginTop: "20px",
                lineHeight: "300%",
                listStyle: "none",
                paddingLeft: "0px"
              }}
            >
              <li>
                <i className="fa fa-angle-right rightIcon" />
                Reach 150,000+ truckers directly on their smartphones
              </li>
              <li>
                <i className="fa fa-angle-right rightIcon" />
                Banner ads
              </li>
              <li>
                <i className="fa fa-angle-right rightIcon" />
                Live survers
              </li>
              <li>
                <i className="fa fa-angle-right rightIcon" />
                Live analytics
              </li>
              <li>
                <i className="fa fa-angle-right rightIcon" />
                Manage your ads
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MapListAdvertise;
