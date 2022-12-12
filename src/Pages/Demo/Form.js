import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./style.module.css";

const DemoForm = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredComapanyName, setEnteredComapanyName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState(NaN);
  const [cType, setCType] = useState("");
  const [checkBox, setCheckBox] = useState();
  const [reactError, setError] = useState("");
  const [msg, setMsg] = useState("");
  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const companyChangeHandler = (event) => {
    setEnteredComapanyName(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const cTypeChangeHandler = (event) => {
    setCType(event.target.value);
  };
  const checkBoxHandler = (event) => {
    setCheckBox(event.target.checked);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredFirstName == "" ||
      enteredEmail == "" ||
      enteredComapanyName == "" ||
      enteredPhone == "" ||
      cType == ""
    ) {
      return false;
    }

    var formData = {
      first_name: enteredFirstName.trim(),
      last_name: enteredLastName.trim(),
      email: enteredEmail.trim(),
      company_name: enteredComapanyName.trim(),
      phone: enteredPhone.trim(),
      company_type: cType,
      promotions: checkBox,
    };

    async function submitForm() {
      try {
        const response = await fetch(
          "https://get.fencecrm.com/fence-admin/form-data",
          {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), // body data type must match "Content-Type" header
          }
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const responseData = await response.json();
        if (responseData.status) {
          setMsg("Thank you for contact us we will reach you soon");
          setCheckBox(false);
          setEnteredFirstName('');
          setEnteredLastName('');
          setEnteredEmail('');
          setEnteredPhone('');
          setError('');
          setEnteredComapanyName('');
          setCType(setCType);
        

        } else {
          setError(responseData[0].msg);
        }
      } catch (error) {
        setError(error.message);
      }

      // parses JSON response into native JavaScript objects
    }
    submitForm(formData);
  };

  return (
    <React.Fragment>
      <div className="col-md-5 col-sm-12 col-xs-12">
        <div className={styles.demoTron}>
          <h3 className="heading">See FenceCRM in Action</h3>
          <br />
          <form className={styles.demoForm}  onSubmit={formSubmitHandler}>
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                required="Firstname"
                type="text"
                onChange={firstNameChangeHandler}
                value={enteredFirstName}
                className="form-control"
                id="firstName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Lastname">Last Name</label>
              <input
                type="text"
                value={enteredLastName}
                className="form-control"
                id="Lastname"
                onChange={lastNameChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address *</label>
              <input
                type="email"
                required="email"
                className="form-control"
                id="exampleInputEmail1"
                value={enteredEmail}
                onChange={emailChangeHandler}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name *</label>
              <input
                required="Company Name"
                type="text"
                value={enteredComapanyName}
                className="form-control"
                id="company"
                onChange={companyChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="number"
                id="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                className="form-control"
                value={enteredPhone}
                onChange={phoneChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="c-type">Company Type *</label>
              <select
                class="form-control"
                onChange={cTypeChangeHandler}
                required
              >
                <option>select..</option>
                <option value="Head Contractor">Head Contractor</option>
                <option value="Sub Contractor">Sub Contractor</option>
                <option value="Owner or developer">Owner or developer</option>
                <option value="Government">Government</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className={styles.checkbox + " form-check-input"}
                id="exampleCheck1"
                onChange={checkBoxHandler}
                required
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
            <br />
            {msg !== "" && (
              <div className="alert alert-success" role="alert">
                {msg}
              </div>
            )}

            {reactError !== "" && (
              <div className="alert alert-danger" role="alert">
                {reactError}
              </div>
            )}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DemoForm;
