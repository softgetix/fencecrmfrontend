import React from "react";
import styles from "./style.module.css";
const Banner = () => {
  return (
    <React.Fragment>
      <div className="col-md-7 col-sm-12 col-xs-12">
        <div className="demo__area">
          <h1 className={styles.demoHeading}>Do more with the hours you work.</h1>
          <p className="heading">
            Customer respondents reported saving an average of 15 days on the
            overall schedule on a typical project.
          </p>
          <div>
          <img className="img-fluid" src="https://www.procore.com/.imaging/default/dam/com/tool/hero/tool_hero_drawings.jpg/jcr:content.jpg" />
          </div>
          <br/>
          <br/>
          <h2 className="heading">All-in-one Construction Management Platform</h2>
          <p className="heading">
            The flexibility of Procore’s open API provides you with the freedom
            to create a single source of accurate and up-to-date data that
            connects all of your siloed apps so you can report across tools and
            projects.
          </p>
          <br/>
          <h2 className="heading">All-in-one Construction Management Platform</h2>
          <p className="heading">
            The flexibility of Procore’s open API provides you with the freedom
            to create a single source of accurate and up-to-date data that
            connects all of your siloed apps so you can report across tools and
            projects.
          </p>
          <br/>
          <h2 className="heading">All-in-one Construction Management Platform</h2>
          <p className="heading">
            The flexibility of Procore’s open API provides you with the freedom
            to create a single source of accurate and up-to-date data that
            connects all of your siloed apps so you can report across tools and
            projects.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Banner;
