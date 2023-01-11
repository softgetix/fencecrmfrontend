import React from "react";
import Wrapper from "../../Common/Wrapper";
import Banner from "./Banner";
import Features from "./Features";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import Ikon from "./Ikon";
import Faq from "./Faq";
import Ready from "./Ready";
const Home = () => {
  return (
    <Wrapper>
      <Banner />
      <Gallery />
      <Features />
      <Testimonial />
      <Ikon />
      <Faq />
      <Ready />
    </Wrapper>
  );
};

export default Home;
