import React from "react";
import Banner from "../../Common/UI/Banner";
import Help from "./Help";
import Wrapper from "../../Common/Wrapper";
import Faq from "../Home/Faq";
const Support = () => {
  return (
    <React.Fragment>
      <Wrapper>
      <Banner
        Title="Support"
        SubTitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
      />
       <Help />
       <Faq />
      </Wrapper>
     
    </React.Fragment>
  );
};
export default Support;
