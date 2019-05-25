import React, { Component } from "react";
import "../App/style.css";

class GetStarted extends Component {
  render() {
    return (
      <div>
        <div className="row portionSetting">
          <div className="col col-md-2" />
          <div className="col col-md-8">
            <h2 className="mainHead">Get started now!</h2>
            <p className="mainPara">
              The sign up is 100 % free and you can create first promo for as
              low as $99/month!
            </p>
            <div className="row">
              <div className="col col-md-3" />
              <div className="col col-md-3 ">
                <button className="btn mainButton">Log in</button>
              </div>
              <div className="col col-md-3">
                <button className="btn mainButton">Sign up</button>
              </div>
              <div className="col col-md-3" />
            </div>
            <div className="row cardRow" style={{ marginTop: "50px" }}>
              <div className="card-group">
                <div className="card cardSetting">
                  <div className="card-body">
                    <center>
                      <div className="card-half">
                        <h5 className="card-title cardTitle">Small Banner</h5>
                        <h1 className="dollarValue">$99</h1>
                        <p className="card-text cardText">
                          Reach Transportation audience via road Hunter small
                          size banner
                        </p>
                        <button className="btn sign-btn">SIGN IN</button>
                      </div>

                      <div className="card-full">
                        <p className="card-title cardTitle">
                          Small <br /> Banner only
                        </p>
                        <p className="paraline">
                          <span className="highlight">Over 150,000</span> TRUCK
                          DRIVERS USING THE APP
                        </p>
                        <p className="paraline">
                          <span className="highlight">CUSTOM</span> BANNER IN PO
                          I MENU
                        </p>
                        <p className="paraline">
                          <span className="highlight">VIEWER</span> LOCATION
                          ANALYTICS
                        </p>

                        <button className="btn btn-lg showExample-btn">
                          SHOW EXAMPLE
                        </button>
                      </div>
                    </center>
                  </div>
                </div>
                {/* end 1st */}
                <div
                  className="card cardSetting centerCardSetting"
                  style={{ position: "relative" }}
                >
                  <div
                    className="card-body"
                    style={{
                      backgroundColor: "#fff",
                      position: "absolute",
                      top: "-15px",
                      bottom: "-15px"
                    }}
                  >
                    <center>
                      <div
                        className="card-half"
                        style={{ backgroundColor: "#F6F6F6" }}
                      >
                        <h5 className="card-title cardTitle">Small Banner</h5>
                        <h1 className="dollarValue">$99</h1>
                        <p className="card-text cardText">
                          Reach Transportation audience via road Hunter small
                          size banner
                        </p>
                        <button className="btn sign-btn">SIGN IN</button>
                      </div>

                      <div
                        className="card-full"
                        style={{ backgroundColor: "#fff" }}
                      >
                        <p className="card-title cardTitle">
                          Small <br /> Banner only
                        </p>
                        <p className="paraline">
                          <span className="highlight">Over 150,000</span> TRUCK
                          DRIVERS USING THE APP
                        </p>
                        <p className="paraline">
                          <span className="highlight">CUSTOM</span> BANNER IN PO
                          I MENU
                        </p>
                        <p className="paraline">
                          <span className="highlight">VIEWER</span> LOCATION
                          ANALYTICS
                        </p>

                        <button className="btn btn-lg showExample-btn">
                          SHOW EXAMPLE
                        </button>
                      </div>
                    </center>
                  </div>
                </div>
                {/* end 2nd */}

                <div className="card cardSetting">
                  <div className="card-body">
                    <center>
                      <div className="card-half">
                        <h5 className="card-title cardTitle">Small Banner</h5>
                        <h1 className="dollarValue">$99</h1>
                        <p className="card-text cardText">
                          Reach Transportation audience via road Hunter small
                          size banner
                        </p>
                        <button className="btn sign-btn">SIGN IN</button>
                      </div>

                      <div className="card-full">
                        <p className="card-title cardTitle">
                          Small <br /> Banner only
                        </p>
                        <p className="paraline">
                          <span className="highlight">Over 150,000</span> TRUCK
                          DRIVERS USING THE APP
                        </p>
                        <p className="paraline">
                          <span className="highlight">CUSTOM</span> BANNER IN PO
                          I MENU
                        </p>
                        <p className="paraline">
                          <span className="highlight">VIEWER</span> LOCATION
                          ANALYTICS
                        </p>

                        <button className="btn btn-lg showExample-btn">
                          SHOW EXAMPLE
                        </button>
                      </div>
                    </center>
                  </div>
                </div>
                {/* end 3rd */}
              </div>
            </div>
          </div>
          <div className="col col-md-2" />
        </div>
      </div>
    );
  }
}

export default GetStarted;
