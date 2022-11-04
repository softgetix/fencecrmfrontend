import { Fragment } from "react";
const Gallery = () => {
  return (
    <Fragment>
      <section id="fencecrm-gallery">
        <div className="fence-crm__container">
          <div className="fencecrm-gallery__carousel">
            <div id="owl-demo" className="owl-carousel owl-theme">
              <div className="item">
                <a href="https://www.truefirms.co/">
                  <img
                    src="https://www.truefirms.co/public/main_assets/images/truefirms_logo.png"
                    alt="True Firms"
                  />
                </a>
              </div>
              <div className="item">
                <a href="https://softgetix.com/">
                  <img
                    src="https://softgetix.com/wp-content/themes/softgetix/assets/images/logo.svg"
                    alt="Softgetix INC"
                  />
                </a>
              </div>
              <div className="item">
                <a href="https://drawersoft.com/">
                  <img style={{backgroundColor:'#272b46'}}
                    src="https://drawersoft.com/wp-content/uploads/2022/07/drawersoft_logolight.png"
                    alt="True Firms"
                  />
                </a>
              </div>
              <div className="item">
                <a href="https://www.diabetickart.com">
                  <img
                    src="https://www.diabetickart.com/wp-content/uploads/2021/11/cropped-logo5.png"
                    alt="True Firms"
                  />
                </a>
              </div>
              
            </div>
          </div>
          <hr className="gallery__hr" />
        </div>
      </section>
    </Fragment>
  );
};
export default Gallery;
