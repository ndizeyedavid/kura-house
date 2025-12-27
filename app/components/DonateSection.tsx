import { ArrowRight } from "lucide-react";

export default function DonateSection() {
  return (
    <div
      id="donate"
      className="container-fluid donate my-5 py-5"
      data-parallax="scroll"
      data-image-src="/img/carousel-2.jpg"
    >
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              Donate Now
            </div>
            <h1 className="display-6 text-white mb-5">
              Thanks For The Results Achieved With You
            </h1>
            <p className="text-white-50 mb-0">Your suppurt at a child.....</p>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100 bg-white p-5">
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="btn-group d-flex justify-content-around">
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        checked
                      />
                      <label className="btn btn-light py-3" htmlFor="btnradio1">
                        $10
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio2"
                      />
                      <label className="btn btn-light py-3" htmlFor="btnradio2">
                        $20
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio3"
                      />
                      <label className="btn btn-light py-3" htmlFor="btnradio3">
                        $30
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary px-5"
                      style={{ height: "60px" }}
                    >
                      <span
                        style={{
                          position: "relative",
                          top: -4,
                        }}
                      >
                        Donate Now
                      </span>
                      <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                        <ArrowRight size={18} className="fa fa-arrow-right" />
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
