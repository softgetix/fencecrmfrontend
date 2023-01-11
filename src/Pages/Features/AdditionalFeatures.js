import React from "react";
import styles from "./features.module.css";
import Card from "../../Common/UI/Card";
const AdditionalFeatures = () => {
  return (
    <React.Fragment>
      <section id="fencecrm-card" className={styles.additionalFeaturesBg}>
        <div className={styles.mask}>
          <div className="fence-crm__container">
            <div className="row text-center">
              <div className="fencecrm-card__inner">
                <h2 className="heading text-white">Additional Features</h2>
                <p className="heading text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
              </div>
            </div>
            <div className="fencecrm-card__boxes">
              <div className="col-md-12">
                <div className="row text-center card-boxes">
                  <Card
                    cardTitle="Lorem IPusm"
                    cardText="  The Lorem ipum filling text is used by graphic
                        designers, programmers and printers with the aim of
                        occupying the spaces a website, an advertising product
                        or an editorial production."
                    cardImg="mokeup/FenceCRM/icons/fence.png"
                  />
                  <Card
                    cardTitle="Lorem IPusm"
                    cardText="  The Lorem ipum filling text is used by graphic
                        designers, programmers and printers with the aim of
                        occupying the spaces a website, an advertising product
                        or an editorial production."
                    cardImg="mokeup/FenceCRM/icons/fence.png"
                  />
                  <Card
                    cardTitle="Lorem IPusm"
                    cardText="  The Lorem ipum filling text is used by graphic
                        designers, programmers and printers with the aim of
                        occupying the spaces a website, an advertising product
                        or an editorial production."
                    cardImg="mokeup/FenceCRM/icons/fence.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default AdditionalFeatures;
