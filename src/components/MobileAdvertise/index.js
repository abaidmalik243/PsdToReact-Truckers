import React, { Component } from "react";
import mobile1 from "../../images/01.png";
import mobile2 from "../../images/02.png";
import mobile3 from "../../images/03.png";
import "./style.css";

class MobileAdvertise extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <div className="container">
          {/* 1st row */}
          <div className="row" style={{ padding: "20px 0px" }}>
            <div className="col-md-5" />
            <div className="col-md-3">
              <img src={mobile1} style={{ width: "100%" }} />
            </div>
            <div className="col-md-4">
              <div className="row" style={{ marginTop: "60px" }}>
                <div className="col-md-9 shadow-sm p-2 mb-3 bg-white rounded">
                  <i className="fa fa-angle-right rightIcon" /> Reach 150,000+
                  truckers directly on their smartphones
                </div>
                <div className="col-md-9 shadow-sm p-2 mb-3 bg-white rounded">
                  <i className="fa fa-angle-right rightIcon" /> Live survers
                </div>
                <div className="col-md-9 shadow-sm p-2 mb-3 bg-white rounded">
                  <i className="fa fa-angle-right rightIcon" />
                  Manage your ads
                </div>
              </div>
            </div>
          </div>
          {/* 2nd row */}
          <div className="row" style={{ padding: "20px 0px" }}>
            {/* <div className="col-md-1" /> */}
            <div className="col-md-3">
              <img src={mobile2} style={{ width: "100%" }} />
            </div>
            <div className="col-md-1" />
            <div className="col-md-4">
              <h5>
                <strong>Advertise Your Business</strong>
              </h5>
              <div className="row">
                <div className="col-md-12 shadow-sm p-2 mb-3 bg-white rounded">
                  <i className="fa fa-angle-right rightIcon" /> Reach 150,000+
                  truckers directly on their smartphones
                </div>
                <div className="col-md-12 shadow-sm p-2 mb-3 bg-white rounded">
                  <i className="fa fa-angle-right rightIcon" /> Live survers
                </div>
                <div className="col-md-12 shadow-sm p-2 mb-3 bg-white rounded">
                  <i className="fa fa-angle-right rightIcon" />
                  Manage your ads
                </div>
                <div className="col-md-12 shadow-sm p-2 mb-3 bg-white rounded">
                  <i className="fa fa-angle-right rightIcon" />
                  Manage your ads
                </div>
                <div className="col-md-12 shadow-sm p-2 mb-3 bg-white rounded">
                  <i className="fa fa-angle-right rightIcon" />
                  Manage your ads
                </div>
              </div>
            </div>
            <div className="col-md-1" />
            <div className="col-md-3">
              <img src={mobile3} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileAdvertise;
