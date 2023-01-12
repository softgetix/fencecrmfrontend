import { useEffect, useState } from "react";
import React from "react";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  async function fetchPlansHandler() {
    try {
      const response = await fetch(
        "https://get.fencecrm.com/ApiController/getPlans"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();
      setPlans(responseData);
    } catch (error) {
      console.log(error);
    }

    // parses JSON response into native JavaScript objects
  }

  useEffect(() => {
    fetchPlansHandler();
  }, []);
  return (
    <React.Fragment>
      <section className="content" id="pricing-page">
        <div className="box box-info">
          <div className="panel-body">
            <section className="py-5">
              <div className="container">
                <div className="row">
                  {plans.map((plan) => (
                    <div className="col-lg-4" key={plan.id}>
                      <div className="card bg-warning mb-5 mb-lg-0 rounded-lg shadow">
                        <div className="card-header">
                          <h5 className="card-title text-white-50 text-uppercase text-center">
                            {plan.name}
                          </h5>
                          <h6 className="h1 text-white text-center">
                            ${plan.price}
                            <span className="h6 text-white-50">
                              /{plan.interval}
                            </span>
                          </h6>
                          <div className="text-center text-white">
                            <span>
                              Free {plan.trial_period_days}-day trial.
                            </span>
                          </div>
                        </div>
                        <div className="card-body bg-light rounded-bottom">
                          <ul className="list-unstyled mb-4">
                            <li className="mb-3">
                              <span className="mr-3">
                                <i
                                  className="fa fa-check text-success"
                                  aria-hidden="true"
                                />
                              </span>
                              Single User
                            </li>
                            <li className="mb-3">
                              <span className="mr-3">
                                <i
                                  className="fa fa-check text-success"
                                  aria-hidden="true"
                                />
                              </span>
                              5GB Storage
                            </li>
                            <li className="mb-3">
                              <span className="mr-3">
                                <i
                                  className="fa fa-check text-success"
                                  aria-hidden="true"
                                />
                              </span>
                              Unlimited Public Projects
                            </li>
                            <li className="mb-3">
                              <span className="mr-3">
                                <i
                                  className="fa fa-check text-success"
                                  aria-hidden="true"
                                />
                              </span>
                              Community Access
                            </li>
                            <li className="text-muted mb-3">
                              <span className="mr-3">
                                <i className="fa fa-times" aria-hidden="true" />
                              </span>
                              Unlimited Private Projects
                            </li>
                            <li className="text-muted mb-3">
                              <span className="mr-3">
                                <i className="fa fa-times" aria-hidden="true" />
                              </span>
                              Dedicated Phone Support
                            </li>
                            <li className="text-muted mb-3">
                              <span className="mr-3">
                                <i className="fa fa-times" aria-hidden="true" />
                              </span>
                              Free Subdomain
                            </li>
                            <li className="text-muted mb-3">
                              <span className="mr-3">
                                <i className="fa fa-times" aria-hidden="true" />
                              </span>
                              Monthly Status Reports
                            </li>
                          </ul>
                          <a
                            href=""
                            className="main-button"
                          >
                            <button
                              className="btn btn-lg btn-outline-maincolor"
                              type="button"
                            >
                              LEARN MORE {" "}
                              <i className="fa-sharp fa-solid fa-angles-right ikon"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Plans;
