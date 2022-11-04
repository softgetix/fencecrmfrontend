import { Fragment } from "react";
const Ready = () => {
  return (
    <Fragment>
      <section id="are-you-ready">
        <div className="fence-crm__container">
          <div className="row">
            <h1 className="fencecrm-banner__heading text-center">
              ARE YOU READY TO START ?
            </h1>
            <div>
              <form method="get" action="https://fencecrm.com/root/get-started">
                <div className="fence-crm__input-area rounded-pill">
                  <input
                    type="email"
                    placeholder="Enter Your Email id"
                    name="email"
                  />
                  <button className="rounded-pill" type="submit">
                    Start for Free
                  </button>
                </div>
              </form>
            </div>
            <div className="are-you-ready__message">
              <i className="fa fa-check-square-o" aria-hidden="true"></i>
              <span> Free for 30 Days</span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Ready;
