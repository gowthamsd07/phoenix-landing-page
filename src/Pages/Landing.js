import React, { Component } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Landing from "../Components/Landing";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="page-offset">
          <Landing />
        </main>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
