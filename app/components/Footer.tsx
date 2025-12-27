import {
  ArrowRight,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div
      className="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h1 className="fw-bold text-primary mb-4">
              KURA<span className="text-white">HOUSE</span>
            </h1>
            <p>Kura House non profit organisation</p>
            <div className="d-flex pt-2">
              <a className="btn btn-square me-1" href="">
                <Twitter className="fab fa-twitter" />
              </a>
              <a className="btn btn-square me-1" href="">
                <Facebook className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square me-1" href="">
                <Youtube className="fab fa-youtube" />
              </a>
              <a className="btn btn-square me-0" href="">
                <Linkedin className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Address</h5>
            <p>
              <MapPin className="fa fa-map-marker-alt me-3" />
              Kigali - RWANDA
            </p>
            <p>
              <Phone className="fa fa-phone-alt me-3" />
              +012 345 67890
            </p>
            <p>
              <Mail className="fa fa-envelope me-3" />
              info@kurahouse.com
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <a className="btn" href="">
              <ArrowRight size={17} className="mx-2" />
              About Us
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Newsletter</h5>
            <p>Subcribe to our news letter</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="#">Kura House</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a href="">Christopher - Saltel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
