import { Fragment } from "react";
const Gallery = () => {
  return (
    <Fragment>
      <section id="fencecrm-gallery">
        <div className="fence-crm__container">
          <div className="fencecrm-gallery__carousel">
            <div id="owl-demo" className="owl-carousel owl-theme">
              <div className="item">
                <img src="assets/images/img3.png" alt="Owl Image" />
              </div>
              <div className="item">
                <img src="assets/images/img5.png" alt="Owl Image" />
              </div>
              <div className="item">
                <img src="assets/images/img7d.png" alt="Owl Image" />
              </div>
              <div className="item">
                <img src="assets/images/img9.png" alt="Owl Image" />
              </div>
              <div className="item">
                <img src="assets/images/img3.png" alt="Owl Image" />
              </div>
              <div className="item">
                <img src="assets/images/img5.png" alt="Owl Image" />
              </div>
              <div className="item">
                <img src="assets/images/img7d.png" alt="Owl Image" />
              </div>
              <div className="item">
                <img src="assets/images/img9.png" alt="Owl Image" />
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
