import React, { Component } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MapListAdvertise from "../MapListAdvertise";
import MobileAdvertise from "../MobileAdvertise";
import GetStarted from "../GetStarted";
import busImage from "../../images/bus.jpg";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ backgroundImage: `url(${busImage})` }}>
          <div style={{ backgroundColor: "#5297D6", opacity: 0.9 }}>
            <div className="container">
              <Navbar />
              <Header />
            </div>
          </div>
        </div>
        <MapListAdvertise />
        <GetStarted />

        <MobileAdvertise />
        <Footer />
      </div>
    );
  }
}

export default App;
