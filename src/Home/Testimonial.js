import { Fragment } from "react";
const Testimonial = () => {
  return (
    <Fragment>
      <section id="testimonial">
        <div className="fence-crm__container">
          <div className="fence-crm__testimonial">
            <div className="testimonial-box text-center">
              <h5>TESTIMONIALS</h5>
              <h3>WHAT CLIENTS SAY</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that
              </p>
            </div>
            <div className="col-md-12">
              <div className="testimonial-box__inner">
                <div className="row text-center testimonial-boxes">
                  <div className="col-md-6 col-lg-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="mokeup/FenceCRM/icons/fence.png"
                        alt=" Fence"
                      />
                      <br />
                      <div className="card-body">
                        <h5 className="card-title">LOREM IPSUM</h5>
                        <p className="card-text title-bottom">The Lorem ipum</p>
                        <i
                          className="fa fa-quote-left ikon-card"
                          aria-hidden="true"
                        ></i>
                        <p className="card-text">
                          The Lorem ipum filling text is used by graphic
                          designers, programmers and printers with the aim of
                          occupying the spaces a website, an advertising product
                          or an editorial production.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="mokeup/FenceCRM/icons/fence.png"
                        alt="fence"
                      />
                      <br />
                      <div className="card-body">
                        <h5 className="card-title">LOREM IPSUM</h5>
                        <p className="card-text">The Lorem ipum</p>
                        <i
                          className="fa fa-quote-left ikon-card"
                          aria-hidden="true"
                        ></i>
                        <p className="card-text">
                          The Lorem ipum filling text is used by graphic
                          designers, programmers and printers with the aim of
                          occupying the spaces a website, an advertising product
                          or an editorial production.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="mokeup/FenceCRM/icons/fence.png"
                        alt="fence"
                      />
                      <br />
                      <div className="card-body">
                        <h5 className="card-title">LOREM IPSUM</h5>
                        <p className="card-text">The Lorem ipum</p>
                        <i
                          className="fa fa-quote-left ikon-card"
                          aria-hidden="true"
                        ></i>
                        <p className="card-text">
                          The Lorem ipum filling text is used by graphic
                          designers, programmers and printers with the aim of
                          occupying the spaces a website, an advertising product
                          or an editorial production.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Testimonial;
