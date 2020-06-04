import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            HSR Layout, Bangalore, India<br />
                            <i className="fa fa-phone fa-lg"></i>: +91 95130 07587<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:social@91social.com">
                                social@91social.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/91social/"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/company/91social/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/91_social?lang=en"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCezscnh_y4vO292PCcUAEwA"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:social@91social.com"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <br /><p>© Copyright 2020 91social</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;