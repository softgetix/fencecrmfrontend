import React from "react";
import styles from "../Demo/style.module.css";
const SupportForm = () => {
  return (
    <React.Fragment>
      <div className={styles.demoTron} style={{ textAlign: "left" }}>
        <h3 className="heading">Contact Us</h3>
        <br />
        <form className={styles.demoForm}>
          <div className="form-group">
            <label htmlFor="Lastname">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="Lastname"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address *</label>
            <input
              type="email"
              required="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address *</label>
         <textarea className="form-control" required name="message">
            
         </textarea>
          </div>

          <br />
          <div className="row justify-content-center">
            <button className="btn btn-lg btn-outline-maincolor" type="submit">
              REQUEST <i className="fa-sharp fa-solid fa-angles-right ikon"></i>
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default SupportForm;
