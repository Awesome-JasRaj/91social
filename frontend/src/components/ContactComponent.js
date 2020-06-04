import React, { Component } from "react";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Col,
    FormFeedback
} from "reactstrap";
import ReactDOM from "react-dom";
import { withRouter } from "react-router";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Mr',
            name: '',
            email: '',
            phone: '',
            password: '',
            address: '',
            address2: '',
            city: '',
            state: '',
            pincode: '',
            emailValidate: '',
            nameValidate: '',
            passwordValidate: '',
            phoneValidate: '',
            pincodeValidate: '',
            fadeIn: true
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        if (this.state.emailValidate == "YES" && this.state.nameValidate == "YES" && this.state.passwordValidate == "YES" && this.state.phoneValidate == "YES" && this.state.pincodeValidate == "YES") {
            const details = <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                <h4>Title:  {this.state.title}</h4>
                <h4>Fullname:  {this.state.name}</h4>
                <h4>Email Id:  {this.state.email}</h4>
                <h4>Password:  {this.state.password}</h4>
                <h4>Phone:  {this.state.phone}</h4>
                <h4>Address:  {this.state.address}</h4>
                <h4>Address 2:  {this.state.address2}</h4>
                <h4>City:  {this.state.city}</h4>
                <h4>State:  {this.state.state}</h4>
                <h4>Pincode:  {this.state.pincode}</h4><br /><br />
            </div>
            ReactDOM.render([<h1>We will contact you shortly!</h1>, details], document.getElementById("contactus"));
            // this.setState({ fadeIn: !this.state.fadeIn });
        }
    }
    validateName() {
        var n = this.state.name;
        if ((/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/).test(n))
            var validate = "YES";
        else
            var validate = "NO";
        this.setState({ nameValidate: validate });
    }
    validateEmail() {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var e = this.state.email;
        if (emailRex.test(e)) {
            var validate = "YES"
        } else {
            var validate = "NO"
        }
        this.setState({ emailValidate: validate });
    }
    validatePassword() {
        var p = this.state.password;
        if ((/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).test(p)) {
            var validate = "YES"
        } else {
            var validate = "NO"
        }
        this.setState({ passwordValidate: validate });
    }
    validatePhone() {
        var ph = this.state.phone;
        if ((/^\d{10}$/).test(ph)) {
            var validate = "YES"
        } else {
            var validate = "NO"
        }
        this.setState({ phoneValidate: validate });
    }
    validatePincode() {
        var pin = this.state.pincode;
        if ((/^\d{6}$/).test(pin)) {
            var validate = "YES"
        } else {
            var validate = "NO"
        }
        this.setState({ pincodeValidate: validate });
    }
    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        }, () => {
            if (name == "email") {
                this.validateEmail();
            }
            else if (name == "name") {
                this.validateName();
            }
            else if (name == "password") {
                this.validatePassword();
            }
            else if (name == "phone") {
                this.validatePhone();
            }
            else if (name == "pincode") {
                this.validatePincode();
            }
        });
    }
    render() {
        return (
            <>
                <div className="container" id="contactus" style={{ backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)", marginTop: 50, marginBottom: 50 }}>
                    <br /><h1>We are always ready to help!</h1><br /><br />
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup row>
                            <Label style={{ fontWeight: "bold" }} for="Title" sm={2}>Title</Label>
                            <Col sm={2}>
                                <Input type="select" name="title" id="Title" value={this.state.title} onChange={this.handleInputChange}>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Ms">Ms</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontWeight: "bold" }} for="Name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input valid={this.state.nameValidate == "YES"} invalid={this.state.nameValidate == "NO"} type="text" name="name" id="Name" placeholder="Enter your full name" value={this.state.name} onChange={this.handleInputChange} required />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label  style={{ fontWeight: "bold" }} for="Email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input valid={this.state.emailValidate == "YES"} invalid={this.state.emailValidate == "NO"} type="email" name="email" id="Email" placeholder="Enter your email id" value={this.state.email} onChange={this.handleInputChange} required />
                                <FormFeedback invalid>
                                    Please input a valid email address!
                            </FormFeedback>
                            </Col>

                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontWeight: "bold" }} for="Password" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input valid={this.state.passwordValidate == "YES"} invalid={this.state.passwordValidate == "NO"} type="password" name="password" id="Password" placeholder="Your password" value={this.state.password} onChange={this.handleInputChange} required />
                                <FormFeedback invalid>
                                    Please enter a strong password!<br />
                                1) Atleast 1 lowercase alphabet.<br />
                                2) Atleast 1 uppercase alphabet.<br />
                                3) Atleast 1 numeric character.<br />
                                4) Atleast 1 special character.<br />
                                5) Atleast 8 characters.
                            </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontWeight: "bold" }} for="Phone" sm={2}>Phone</Label>
                            <Col sm={10}>
                                <Input valid={this.state.phoneValidate == "YES"} invalid={this.state.phoneValidate == "NO"} type="text" name="phone" id="Phone" placeholder="9876543210" value={this.state.phone} onChange={this.handleInputChange} required />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontWeight: "bold" }} for="Address" sm={2}>Address</Label>
                            <Col sm={10}>
                                <Input valid={this.state.address.length > 10} invalid={this.state.address.length > 0 && this.state.address.length <= 10} type="text" name="address" id="Address" placeholder="123 Main St" value={this.state.address} onChange={this.handleInputChange} required />
                                <FormFeedback invalid>
                                    Please enter atleast 8 characters!
                            </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontWeight: "bold" }} for="Address2" sm={2}>Address 2</Label>
                            <Col sm={10}>
                                <Input valid={this.state.address2.length > 10} invalid={this.state.address2.length > 0 && this.state.address2.length <= 10} type="text" name="address2" id="Address2" placeholder="Apartment, studio, or floor" value={this.state.address2} onChange={this.handleInputChange} required />
                                <FormFeedback invalid>
                                    Please enter atleast 8 characters!
                            </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontWeight: "bold" }} for="City" sm={2}>City</Label>
                            <Col sm={3}>
                                <Input type="text" name="city" id="City" placeholder="Bangalore" value={this.state.city} onChange={this.handleInputChange} required />
                            </Col>
                            <Label style={{ fontWeight: "bold" }} for="State" sm={1}>State</Label>
                            <Col sm={3}>
                                <Input type="text" name="state" id="State" placeholder="Karnataka" value={this.state.state} onChange={this.handleInputChange} required />
                            </Col>
                            <Label style={{ fontWeight: "bold" }} for="Pincode" sm={1}>Pincode</Label>
                            <Col>
                                <Input valid={this.state.pincodeValidate == "YES"} invalid={this.state.pincodeValidate == "NO"} type="text" name="pincode" id="Pincode" placeholder="560085" value={this.state.pincode} onChange={this.handleInputChange} required />
                                <FormFeedback invalid>
                                    Please enter a valid pincode!
                            </FormFeedback>
                            </Col>
                        </FormGroup>
                        <br />
                        <Button type="submit" value="submit" color="primary" outline>Submit</Button><br /><br />
                    </Form>
                </div>
            </>
        );
    }
}
export default withRouter(Contact);