import React from "react";
import Wrapper from "../src/Common/Wrapper";
import Banner from "../src/Common/UI/Banner";
import Plans from "./Plans";
const Pricing = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Banner
          Title="Pricing"
          SubTitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        />
        <Plans />
      </Wrapper>
    </React.Fragment>
  );
};
export default Pricing;
