import React from "react";
import Wrapper from "../../Common/Wrapper";
import Banner from "../../Common/UI/Banner";
import Content from "./Content";
import AdditionalFeatures from "./AdditionalFeatures";

const Features = () => {
  return (
    <React.Fragment>
      <Wrapper>
      <Banner
          Title="Features"
          SubTitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        />
        <Content/>
        <AdditionalFeatures/>
      </Wrapper>
    </React.Fragment>
  );
};
export default Features;
