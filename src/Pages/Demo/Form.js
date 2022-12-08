import React, { useState } from "react";
import styles from "./style.module.css";
const DemoForm = () => {
  return (
    <React.Fragment>
      <div className="col-md-5 col-sm-12 col-xs-12">
        <div className={styles.demoTron}>
          <h3 className="heading">See FenceCRM in Action</h3>
          <br />
          <form className={styles.demoForm}>
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input type="password" className="form-control" id="firstName" />
            </div>
            <div className="form-group">
              <label htmlFor="Lastname">Last Name</label>
              <input type="password" className="form-control" id="Lastname" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address *</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name *</label>
              <input type="text" className="form-control" id="company" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="c-type">Company Type *</label>
              <select class="form-control">
                <option>select..</option>
                <option>Head Contractor</option>
                <option>Sub Contractor</option>
                <option>Owner or developer</option>
                <option>Government</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className={styles.checkbox + " form-check-input"}
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Yes, I want to get emails from Procore about products,
                promotions, events, and featured content at the email address
                above.
              </label>
            </div>
            <br />
            <div className="row justify-content-center">
              <button class="btn btn-lg btn-outline-maincolor" type="submit">
                REQUEST <i class="fa-sharp fa-solid fa-angles-right ikon"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DemoForm;
