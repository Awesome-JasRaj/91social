import React, { Component } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Spinner,
  Jumbotron,
  Collapse
} from "reactstrap";
import ReactDOM from "react-dom";
import Logo from "../Logo.png";
import { withRouter } from "react-router";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img src={Logo} height="50" width="130" alt="91social" />
            </NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/"><span className="fa fa-home fa-lg"></span> <b>Home</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact"><span className="fa fa-envelope fa-lg"></span> <b>Contact Us</b></NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
        <Jumbotron className="jumbotron" style={{ backgroundImage: "linear-gradient(to right, #ffafbd, #ffc3a0)" }}>
          <h1 className="display-3">Go where your customers are</h1>
          <h1 className="display-3" style={{ color: "red" }}>
            Go Digital
          </h1>
          <br />
          <p className="lead">
            Customers expect your business to be available on their mobiles,
            laptops and in their messaging apps, 24x7.
          </p>
          <h4>
            Its time to <span style={{ color: "red" }}>Go Digital</span>
          </h4>
        </Jumbotron>
      </div>
    );
  }
}

export default withRouter(Header);
