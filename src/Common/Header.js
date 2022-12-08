import { React,Fragment } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <Fragment>
           <section id="top-bar">
         <div className="fence-crm__container">
            <div className="top-bar__inner">
               <div className="row float-end">
               <ul className="nav">
                  <li className="nav-item">
                     <NavLink activeClassName="active" className="nav-link top-bar__link" to="/" >TESTIMONIAL</NavLink>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link top-bar__link" href="https://fencecrm.com/">BLOGS</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link top-bar__link" href="https://get.fencecrm.com/login">LOGIN</a>
                  </li>
               </ul>
            </div>
            </div>
         </div>
      </section>
      <section id="nav-bar">
         <div className="fence-crm__container">
            <nav className="navbar navbar-expand-lg navbar-light">
               <NavLink className="navbar-brand " to="/">
               <img src="mokeup/img3.png" alt="mokeup" className="fence-crm__main-logo"/>
               </NavLink>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse"id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto">
                     <li className="nav-item">
                        <NavLink to="/request-free-demo" activeClassName="active" className="nav-link fence-crm__font-style " >DEMO</NavLink>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link fence-crm__font-style" href="https://fencecrm.com/">FEATURES<i className="fa-solid fa-chevron-down ikon-nav-link"></i></a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link fence-crm__font-style" href="https://fencecrm.com/">PRICING</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link fence-crm__font-style" href="https://fencecrm.com/">RESOURCES <i className="fa-solid fa-chevron-down ikon-nav-link"></i></a>
                     </li>
                     <button className="disbale-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <i className="fa fa-times" aria-hidden="true"></i>
                     </button>
                  </ul>
               </div>

              <a href="https://get.fencecrm.com/get-started" className="main-button"><button className="btn btn-lg btn-outline-maincolor" type="button">FREE SIGNUP <i className="fa-sharp fa-solid fa-angles-right ikon"></i></button>
              </a></nav>
         </div>
      </section>
        </Fragment>
    );
}

export default Header;