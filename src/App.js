import React, { Fragment } from "react";
import Home from "./Pages/Home/Home";
import { Route } from "react-router-dom";
import Demo from "./Pages/Demo/Index";
import Features from "./Pages/Features/Features";
import Pricing from "./Pages/Pricing/Pricing";
import "./style.css";
import "./assets/carousel/owl-carousel/owl.carousel.css";
import "./assets/carousel/owl-carousel/owl.theme.css";
import "./assets/style/responsive.css";
import "./assets/carousel/owl-carousel/owl.carousel.js";
function App() {
  return (
    <Fragment>
      <React.Fragment>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/request-free-demo">
          <Demo />
        </Route>
        <Route exact path="/features">
          <Features />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
      </React.Fragment>
    </Fragment>
   );
}

export default App;
