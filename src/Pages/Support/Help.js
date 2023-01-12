import React from "react";
import SmallCard from "../../Common/UI/SmallCard";
import SupportForm from "./SupportForm";
const Help = () => {
  return (
    <React.Fragment>
      <section id="fencecrm-ikons-area">
        <div className="fence-crm__container">
          <div className="row text-center">
            <h2 className="heading wow slideInLeft">How can we Help ?</h2>
            <p className="heading">
              It is a long established fact that a reader will be distracted by
              the readable content{" "}
            </p>
          </div>
          <div className="fencecrm-ikon-area__inner">
            <div className="col-md-12 m-auto">
              <div className="row text-center mt-30">
                <div className="col-md-6">
                  <div className="row">
                    <SmallCard
                      icon="icon-park-solid:headphone-sound"
                      text="Call"
                    />
                    <SmallCard
                      icon="material-symbols:attach-email"
                      text="Message"
                    />
                    <SmallCard
                      icon="ri:git-pull-request-fill"
                      text="Request a demo"
                    />
                    <SmallCard
                      icon="mdi:map-marker-question-outline"
                      text="Ask Question"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <SupportForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Help;
