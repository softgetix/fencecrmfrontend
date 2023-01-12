import { React, Fragment } from "react";
import SmallCard from "../../Common/UI/SmallCard";
const Ikon = () => {
  return (
    <Fragment>
      <section id="fencecrm-ikons-area">
        <div className="fence-crm__container">
          <div className="row text-center">
            <h2 className="heading wow slideInLeft">
              Lorem Ipsum Dolor sit Amet
            </h2>
            <p className="heading">
              It is a long established fact that a reader will be distracted by
              the readable content{" "}
            </p>
          </div>
          <div className="fencecrm-ikon-area__inner">
            <div className="row text-center mt-30">
              <SmallCard
                img="mokeup/FenceCRM/icons/coins.png"
                text="LOREM ISPSUM LOREM"
              />
              <SmallCard
                img="mokeup/FenceCRM/icons/mail.png"
                text="LOREM ISPSUM LOREM"
              />
              <SmallCard
                img="mokeup/FenceCRM/icons/organization.png"
                text="LOREM ISPSUM LOREM"
              />
              <SmallCard
                img="mokeup/FenceCRM/icons/stock-market.png"
                text="LOREM ISPSUM LOREM"
              />
              <SmallCard
                img="mokeup/FenceCRM/icons/worldwide.png"
                text="LOREM ISPSUM LOREM"
              />
              <SmallCard
                img="mokeup/FenceCRM/icons/coins.png"
                text="LOREM ISPSUM LOREM"
              />
              <SmallCard
                img="mokeup/FenceCRM/icons/mail.png"
                text="LOREM ISPSUM LOREM"
              />
              <SmallCard
                img="mokeup/FenceCRM/icons/organization.png"
                text="LOREM ISPSUM LOREM"
              />
              <SmallCard
                img="mokeup/FenceCRM/icons/stock-market.png"
                text="LOREM ISPSUM LOREM"
              />
              <SmallCard
                img="mokeup/FenceCRM/icons/worldwide.png"
                text="LOREM ISPSUM LOREM"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Ikon;
