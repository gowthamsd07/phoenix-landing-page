import React, { Component, Fragment } from "react";
import Banner from "./Banner";
import Customers from "./Customers";
import AppDevelopment from "./AppDevelopment";
import WordsOnStreet from "./WordsOnStreet";
import WhyPhoenix from "./WhyPhoenix";
import TechStack from "./TechStack";
import ContactForm from "./ContactForm";

class Landing extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Banner />
        <Customers />
        <AppDevelopment />
        <WordsOnStreet />
        <WhyPhoenix />
        <TechStack />
        <ContactForm />
      </Fragment>
    );
  }
}

export default Landing;
