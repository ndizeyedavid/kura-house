import Hero from "./components/Hero";
import CTA from "./components/CTA";
import { ArrowRight } from "lucide-react";
import DonateSection from "./components/DonateSection";
import StaffMembers from "./components/StaffMembers";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container py-5">
        <div className="row text-center mb-4">
          <h2 className="fw-bold">Who We Are</h2>
          <p className="text-muted">
            We provide vulnerable children and youth a safe home, education, and
            opportunities to grow with dignity.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="icon-box">
              <h4 className="fw-bold">Our Mission</h4>
              <p>
                To support children and youth affected by poverty, HIV, and
                trauma by giving them safe shelter, education, and life skills
                for a hopeful future.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="icon-box">
              <h4 className="fw-bold">Our Vision</h4>
              <p>
                A Rwanda where every child and young mother lives in dignity,
                free from stigma, empowered to build a brighter tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About us */}
      <section
        id="about"
        style={{ backgroundImage: "url('/img/done.jpg')" }}
        className="hero-section"
      >
        <div className="content">
          <h1 style={{ color: "orange" }} className="display-4 fw-bold">
            About Kura House Bethléem
          </h1>
          <p className="lead">
            Restoring Dignity and Hope for Children and Youth in Rwanda
          </p>
        </div>
      </section>
      {/* What we doo */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <h2 className="fw-bold text-primary">What We Do</h2>
            <p className="text-muted">
              We create pathways for dignity, healing, and sustainable
              livelihoods.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="icon-box">
                <h5 className="fw-bold"> Safe Shelter</h5>
                <p>
                  Providing temporary housing and life orientation to prepare
                  beneficiaries for stable futures.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box">
                <h5 className="fw-bold"> Medical & Psychosocial</h5>
                <p>
                  Monitoring treatments, offering counseling, and supporting
                  trauma healing sessions.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box">
                <h5 className="fw-bold"> Education & Skills</h5>
                <p>
                  Academic tutoring and practical skills like sewing, cooking,
                  and hairdressing.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="icon-box">
                <h5 className="fw-bold"> Nutrition Support</h5>
                <p>
                  Daily meals and food security programs through shared farming
                  and family gardens.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="icon-box">
                <h5 className="fw-bold"> Income Initiatives</h5>
                <p>
                  Training parents in small trades and crafts to build household
                  resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-5" style={{ backgroundColor: "black" }}>
        <div className="container">
          <div className="row text-center text-white mb-4">
            <h2 className="fw-bold text-primary">Our Impact</h2>
            <p>
              Touching lives and shaping futures with compassion and dignity.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-3 impact-box">
              <h3 className="fw-bold text-primary">40+</h3>
              <p>Children & Youth Supported</p>
            </div>
            <div className="col-md-3 impact-box">
              <h3 className="fw-bold text-primary">90%</h3>
              <p>Improved Academic Performance</p>
            </div>
            <div className="col-md-3 impact-box">
              <h3 className="fw-bold text-primary">200+</h3>
              <p>Meals Served Monthly</p>
            </div>
            <div className="col-md-3 impact-box">
              <h3 className="fw-bold text-primary">100%</h3>
              <p>Commitment to Dignity & Hope</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      {/* What we doo */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              What We Do
            </div>
            <h1 className="display-6 mb-5">
              Learn More What We Do And Get Involved
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="/img/icon-1.png" alt="" />
                <h4 className="mb-3">Child Education</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a className="btn btn-outline-primary px-3" href="">
                  <span
                    style={{
                      position: "relative",
                      top: -4,
                    }}
                  >
                    Learn More
                  </span>
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <ArrowRight
                      size={18}
                      className="fa fa-arrow-right"
                    ></ArrowRight>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="/img/icon-2.png" alt="" />
                <h4 className="mb-3">Medical Treatment</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a className="btn btn-outline-primary px-3" href="">
                  <span
                    style={{
                      position: "relative",
                      top: -4,
                    }}
                  >
                    Learn More
                  </span>
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <ArrowRight
                      size={18}
                      className="fa fa-arrow-right"
                    ></ArrowRight>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="/img/icon-3.png" alt="" />
                <h4 className="mb-3">Pure Drinking Water</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a className="btn btn-outline-primary px-3" href="">
                  <span
                    style={{
                      position: "relative",
                      top: -4,
                    }}
                  >
                    Learn More
                  </span>
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <ArrowRight size={18} className="fa fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DOnate now */}
      <DonateSection />

      {/* Staff Members */}
      <StaffMembers />
    </>
  );
}
