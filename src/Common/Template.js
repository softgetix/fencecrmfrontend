import { React, Fragment } from "react";
import Header from "./Header";
// import Banner from "../Home/Banner";
import Footer from "./Footer";
// import Card from "../Home/Card";
// import Gallery from "../Home/Gallery";
// import Ikon from "../Home/Ikon";
// import Faq from "../Home/Faq";

// import Testimonial from "../Home/Testimonial";
// import Ready from "../Home/Ready";
const Template = (props) => {
    return (
        <Fragment>
            <Header/>
            {props.children}
            <Footer/>
        </Fragment>
    );
}
export default Template;