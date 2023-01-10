import React from "react";
import Wrapper from "../../Common/Wrapper";
import Banner from "./Banner";
import Content from "./Content";
import styles from "./features.module.css";

const Features = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Banner/>
        <Content/>
      </Wrapper>
    </React.Fragment>
  );
};
export default Features;
