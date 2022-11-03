import { Fragment } from "react";
const Header = () => {
    return (
        <Fragment>
           <section id="top-bar">
         <div className="fence-crm__container">
            <div className="top-bar__inner">
               <div className="row float-end">
               <ul className="nav">
                  <li className="nav-item">
                     <a className="nav-link top-bar__link" href="#">TESTIMONIAL</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link top-bar__link" href="#">BLOGS</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link top-bar__link" href="https://fencecrm.com/root/login">LOGIN</a>
                  </li>
               </ul>
            </div>
            </div>
         </div>
      </section>
      <section id="nav-bar">
         <div className="fence-crm__container">
            <nav className="navbar navbar-expand-lg navbar-light">
               <a className="navbar-brand " href="#">
               <img src="mokeup/img3.png" className="fence-crm__main-logo"/>
               </a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse"id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto">
                     <li className="nav-item">
                        <a className="nav-link fence-crm__font-style " href="#">PRODUCTS<i className="fa-solid fa-chevron-down ikon-nav-link"></i></a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link fence-crm__font-style" href="#">FEATURES<i className="fa-solid fa-chevron-down ikon-nav-link"></i></a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link fence-crm__font-style" href="#">PRICING</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link fence-crm__font-style" href="#">RESOURCES <i className="fa-solid fa-chevron-down ikon-nav-link"></i></a>
                     </li>
                  </ul>
               </div>

              <a href="https://fencecrm.com/root/get-started"><button className="btn btn-lg btn-outline-maincolor" type="button">FREE SIGNUP <i className="fa-sharp fa-solid fa-angles-right ikon"></i></button>
              </a></nav>
         </div>
      </section>
        </Fragment>
    );
}

export default Header;