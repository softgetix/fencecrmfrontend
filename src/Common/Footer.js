import { Fragment } from "react";
import React from "react";
const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div className="fence-crm__container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                            <div className="footer-1">
                                <div>
                                    <img src="mokeup/img3.png" className="fence-crm__main-logo" alt="https://fencecrm.com/" />
                                </div>

                                <div className="https://fencecrm.com/">
                                    <ul className="social">
                                        <li>
                                            <a href="https://fencecrm.com/"><i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://fencecrm.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://fencecrm.com/"><i className="fa-brands fa-twitter"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="db-block">
                                    <p className="footer-text">Call us at <a href="tel:+91-731-4002699">+91-731-4002699</a></p>
                                    <p className="footer-text">email us at <a href="mail:support@fencecrm.com">support@fencecrm.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">

                            <span>Contact</span>
                            <br />
                            <br />
                            <ul className="contact">

                                <li>
                                    <a href="https://fencecrm.com/">Home</a>
                                </li>
                                <li>
                                    <a href="https://fencecrm.com/">About</a>
                                </li>
                                <li>
                                    <a href="https://fencecrm.com/">Blog</a>
                                </li>
                                <li>
                                    <a href="https://fencecrm.com/">Gallery </a>
                                </li>
                                <li>
                                    <a href="https://fencecrm.com/">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <span>Contact</span>
                            <br />
                            <br />
                            <ul className="contact">

                                <li>
                                    <a href="https://fencecrm.com/">Home</a>
                                </li>
                                <li>
                                    <a href="https://fencecrm.com/">About</a>
                                </li>
                                <li>
                                    <a href="https://fencecrm.com/">Blog</a>
                                </li>
                                <li>
                                    <a href="https://fencecrm.com/">Gallery </a>
                                </li>
                                <li>
                                    <a href="https://fencecrm.com/">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <section id="footer-bottom">
                <div className="fence-crm__container">
                    <div className="d-md-flex justify-content-between">
                        <div className="pb-4 pt-4 font-size-xs text-center text-md-left copyright opacity-50">
                            © All rights reserved by FenceCRM
                        </div>
                        <div className="widget widget-links widget-light pb-4 pt-4">
                            <ul className="d-flex flex-wrap justify-content-center justify-content-md-start footer-menu">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-377"><a title="Help Center" href="/support">Help Center</a></li>
                                <li>|</li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item active menu-item-379"><a title="Privacy policy" href="/privacy-policy/">Privacy policy</a></li>
                                <li>|</li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-380"><a title="Terms &amp; Conditions" href="/terms-and-conditions/">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </Fragment>
    );

}
export default Footer;