"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function contactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      setError("");
      setSuccess("");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Failed to send message (${res.status})`);
      }

      setSuccess("Message sent successfully. Thank you for reaching out.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Contact Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Contact Us
              </div>
              <h1 className="display-6 mb-5">
                If You Have Any Query, Please Contact Us
              </h1>
              <p className="mb-4">
                Kindly reach us out for more information fille the following
                form below with it's respondiing information.
              </p>
              {error ? <div className="alert alert-danger">{error}</div> : null}
              {success ? (
                <div className="alert alert-success">{success}</div>
              ) : null}

              <form onSubmit={onSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "100px" }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12  ">
                    <button
                      className="btn btn-primary py-2 px-3 me-3"
                      type="submit"
                      disabled={submitting}
                    >
                      <span
                        style={{
                          position: "relative",
                          top: -4,
                        }}
                      >
                        {submitting ? "Sending..." : "Send Message"}
                      </span>
                      <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                        <ArrowRight
                          size={18}
                          className="fa fa-arrow-right"
                        ></ArrowRight>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: "450px" }}
            >
              <div className="position-relative rounded overflow-hidden h-100">
                <iframe
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!4v1757946841015!6m8!1m7!1sb7Rzqax8G6qZSs0v_oEV4Q!2m2!1d-1.95511949705958!2d30.06077938019413!3f318.9566759566631!4f5.7469536152908915!5f0.7820865974627469"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
