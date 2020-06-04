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
import { withRouter } from "react-router";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{marginTop: 100, marginBottom: 100}}>
                <h1>Welcome to 91Social!</h1><br />
                <h3>To see the front-end assignment, please click on ContactUs!</h3>
            </div>
        );
    }
}

export default withRouter(Header);