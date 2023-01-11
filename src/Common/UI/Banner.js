import React from "react";
const Banner = (props) => {
  return (
    <React.Fragment>
      <section id="fencecrm-banner">
        <div className="fence-crm__container">
          <div className="row">
            <h1
              className="fencecrm-banner__heading text-center"
              style={{ paddingBottom: "10px" }}
            >
              {props.Title}
            </h1>
            <div
              className="row justify-content-center"
              style={{ paddingBottom: "60px" }}
            >
              <div className="col-md-10 text-center">
                <p className="heading text-white">{props.SubTitle}</p>
                <a
                  href="https://get.fencecrm.com/get-started"
                  className="main-button"
                >
                  <button
                    className="btn btn-lg btn-outline-maincolor text-white"
                    type="button"
                  >
                    LEARN MORE{" "}
                    <i className="fa-sharp fa-solid fa-angles-right ikon"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Banner;
