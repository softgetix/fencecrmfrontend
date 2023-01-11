import React from "react";
import { Fragment } from "react";
import Card from "../../Common/UI/Card";
const Features = () => {
  return (
    <Fragment>
      <section id="fencecrm-card">
        <div className="fence-crm__container">
          <div className="row text-center">
            <div className="fencecrm-card__inner">
              <h2 className="heading">Lorem Ipsum Dolor sit Amet</h2>
              <p className="heading">
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
              <h5 className="cardH5">
                LEARN MORE ABOUT FenceCRM FEAUTURES
                <span>
                  <i className="fa-sharp fa-solid fa-angles-right ikon"></i>
                </span>
              </h5>
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
      </section>
    </Fragment>
  );
};
export default Features;
