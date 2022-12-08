import React from "react";
import Wrapper from "../../Common/Wrapper";
import Banner from "./Banner";
import DemoForm from "./Form";
import styles from "./style.module.css";
const Demo = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <section id="demo-banner" className={styles.demoBanner}>
          <div className="fence-crm__container">
            <div className="col-md-12">
              <div className="row">
                <Banner />
                <DemoForm />
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </React.Fragment>
  );
};

export default Demo;
