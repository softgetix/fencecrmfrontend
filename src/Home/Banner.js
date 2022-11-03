import  React  from "react"


const Banner = () => {
return (
    <React.Fragment>
        <section id="fencecrm-banner">
         <div className="fence-crm__container">
            <div className="row">
               <h1 className="fencecrm-banner__heading text-center">LOREM IPSUM DOLOR SIT AMET</h1>
            </div>
            <div className="col-md-12">
               <div className="row">
                  <div className="col-md-12 col-lg-5 col-sm-12 col-xs-12">
                     <div className="fencecrm-banner__tab-panel">
                        <ul className="nav nav-tabs fence__nav" id="myTab" role="tablist">
                           <li className="nav-item" role="presentation">
                              <a href="/" className="fence-crm__tab active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"  role="tab" aria-controls="home" aria-selected="true">CRM</a>
                           </li>
                           <li className="nav-item" role="presentation">
                              <a href="/" className="fence-crm__tab" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"  role="tab" aria-controls="profile" aria-selected="false">TASK & PROJECTS</a>
                           </li>
                        </ul>
                        <br/>
                        <div className="tab-content" id="myTabContent">
                           <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                              <li><a href="gautam">Leads, Deals, Contacts, Companies</a></li>
                              <li><a href="gautam">Quotes, Invoices</a></li>
                              <li><a href="gautam">Online payments</a></li>
                              <li><a href="gautam">Sales automation</a></li>
                              <li><a href="gautam">Rules and triggers</a></li>
                              <li><a href="gautam">Contact center</a></li>
                              <li><a href="gautam">Marketing</a></li>
                              <li><a href="gautam">Sales Intelligence</a></li>
                           </div>
                           <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                              <li><a href="gautam">Leads, Deals, Contacts, Companies</a></li>
                              <li><a href="gautam">Quotes, Invoices</a></li>
                              <li><a href="gautam">Online payments</a></li>
                              <li><a href="gautam">Sales automation</a></li>
                              <li><a href="gautam">Rules and triggers</a></li>
                              <li><a href="gautam">Contact center</a></li>
                              <li><a href="gautam">Marketing</a></li>
                              <li><a href="gautam">Sales Intelligence</a></li>
                           </div>
                        </div>
                        </div>
                        <div className="fence-crm-banner__form-area">
                        <form method="post">
                           <div className="fence-crm__input-area rounded-pill">
                              <input type="email" placeholder="Enter Your Email" name="email" />
                              <button className="rounded-pill" type="submit">Start for Free</button>
                           </div>
                        </form>

                        <div className="banner-area__message">
                           <i className="fa fa-check-square-o" aria-hidden="true"></i>
                           <span> FREE FOR 30 USERS</span>

                        </div>
                         </div>
                     
                  </div>
                  <div className="col-md-12 col-lg-7 col-sm-12 col-xs-12">
                     <img src="assets/images/img7.png" alt="img" width="100%;"/>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </React.Fragment>
);

}
export default Banner;