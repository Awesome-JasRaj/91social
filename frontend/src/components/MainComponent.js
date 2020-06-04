import React, { Component } from "react";
import { withRouter } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default withRouter(Main);
