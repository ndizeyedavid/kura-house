import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="/img/hero_1.jpeg" alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7 pt-5">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">
                      {" "}
                      WELCOME TO KURAHOUSE RWANDA
                    </h1>
                    <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                      Providing shelter, education, and care for vulnerable
                      children and youth.
                    </p>
                    <a
                      className="btn btn-primary py-2 px-3 animated slideInDown"
                      href=""
                    >
                      <span
                        style={{
                          position: "relative",
                          top: -4,
                        }}
                      >
                        Learn More
                      </span>
                      <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                        <ArrowRight size={20} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="/img/hero.jpeg" alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7 pt-5">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">
                      Hope Lives Here
                    </h1>
                    <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                      From shelter to skills, we walk with children and youth
                      toward a brighter tomorrow.
                    </p>
                    <a
                      className="btn btn-primary py-2 px-3 animated slideInDown"
                      href=""
                    >
                      <span
                        style={{
                          position: "relative",
                          top: -4,
                        }}
                      >
                        Learn More
                      </span>
                      <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                        <ArrowRight size={20} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
