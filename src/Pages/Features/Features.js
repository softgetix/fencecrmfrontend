import React from "react";
import Wrapper from "../../Common/Wrapper";
import Banner from "./Banner";
import Content from "./Content";
import AdditionalFeatures from "./AdditionalFeatures";

const Features = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Banner/>
        <Content/>
        <AdditionalFeatures/>
      </Wrapper>
    </React.Fragment>
  );
};
export default Features;
