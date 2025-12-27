import { ArrowRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";
export default function Header() {
  const links = [
    {
      text: "Home",
      href: "/",
      active: true,
    },
    {
      text: "About",
      href: "/#about",
      active: false,
    },
    {
      text: "Events",
      href: "/events",
      active: false,
    },
    {
      text: "Team",
      href: "/#team",
      active: false,
    },
    {
      text: "Projects",
      href: "/projects",
      active: false,
    },
    {
      text: "Contact",
      href: "/contact",
      active: false,
    },
  ];

  return (
    <div
      className="container-fluid fixed-top px-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
          <small>
            <MapPin size={18} className="fa fa-map-marker-alt me-1" />
            Kigali - Rwanda
          </small>
          <small className="ms-4">
            <Mail size={18} className="fa fa-envelope me-1" />
            info@kurahouse.org
          </small>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link href="/" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="fw-bold text-primary m-0">
            KURA<span className="text-white">HOUSE</span>
          </h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            {links.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className={`nav-item nav-link ${link.active && "active"}`}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="d-none d-lg-flex ms-2">
            <a className="btn btn-outline-primary py-2 px-3" href="#donate">
              <span
                style={{
                  position: "relative",
                  top: -4,
                }}
              >
                Donate Now
              </span>
              <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                <ArrowRight size={20} />
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
