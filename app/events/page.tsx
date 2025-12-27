"use client";
import { useEffect } from "react";
import type { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  byose: {
    height: "100%",
    margin: 0,
    background: "white",
    color: "#0f1724",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    padding: "32px",
    display: "flex",
    justifyContent: "center",
  },
  wrap: {
    width: "100%",
    maxWidth: "1200px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    marginBottom: "18px",
  },
  headerH1: {
    margin: 0,
    fontSize: "20px",
    letterSpacing: "-0.2px",
  },
  headerP: {
    margin: 0,
    color: "#6b7280",
    fontSize: "14px",
  },
  eventsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    alignItems: "start",
  },
  eventCard: {
    background: "#ffffff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 30px rgba(17,24,39,0.08)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.18s ease, box-shadow 0.18s ease",
    border: "1px solid rgba(15,23,36,0.04)",
    cursor: "pointer",
  },
  eventMedia: {
    width: "100%",
    aspectRatio: "16/9",
    background: "#e6f3ea",
    position: "relative",
    overflow: "hidden",
  },
  eventMediaImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.45s cubic-bezier(0.2,0.9,0.3,1)",
  },
  eventContent: {
    padding: "16px",
    display: "flex",
    gap: "12px",
    flexDirection: "column",
    flex: "1 1 auto",
  },
  meta: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
    color: "#6b7280",
  },
  badge: {
    padding: "6px 10px",
    borderRadius: "999px",
    background: "rgba(18,138,67,0.10)",
    color: "#ff6f0f",
    fontWeight: "700",
    fontSize: "13px",
    border: "1px solid rgba(18,138,67,0.08)",
  },
  title: {
    margin: 0,
    fontSize: "16px",
    lineHeight: "1.25",
    color: "#071426",
  },
  desc: {
    margin: 0,
    color: "#374151",
    fontSize: "14px",
    lineHeight: "1.5",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
    marginTop: "auto",
  },
  readMoreBtn: {
    border: "none",
    color: "white",
    background: "#ff6f0f",
    fontWeight: "700",
    cursor: "pointer",
    padding: "8px 10px",
    borderRadius: "8px",
    transition: "background 0.12s ease",
  },
  info: {
    fontSize: "13px",
    color: "#6b7280",
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(2,6,23,0.5)",
    zIndex: 1200,
    padding: "20px",
  },
  modal: {
    width: "100%",
    maxWidth: "900px",
    background: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(2,6,23,0.4)",
    transform: "translateY(12px)",
    transition: "transform 0.18s ease, opacity 0.18s ease",
  },
  modalGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 0,
  },
  modalMedia: {
    minHeight: "260px",
    overflow: "hidden",
    background: "#e9f6ee",
  },
  modalMediaImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  modalBody: {
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  modalBodyH2: {
    margin: 0,
    fontSize: "20px",
  },
  modalBodyMeta: {
    marginTop: "4px",
  },
  modalBodyP: {
    margin: 0,
    color: "#334155",
    lineHeight: "1.6",
  },
  modalClose: {
    marginLeft: "auto",
    background: "transparent",
    border: "none",
    fontWeight: "700",
    color: "#6b7280",
    cursor: "pointer",
    padding: "8px 10px",
    borderRadius: "8px",
  },
  modalActions: {
    display: "flex",
    gap: "8px",
    marginTop: "8px",
    alignItems: "center",
  },
  btnSecondary: {
    border: "1px solid rgba(15,23,36,0.06)",
    background: "transparent",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  btnPrimary: {
    background: "linear-gradient(90deg,#0f9a4b,#ff6f0f)",
    color: "white",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
  },
};

const responsiveStyles = `
  @media (max-width: 960px) {
    .events-grid-responsive { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .events-grid-responsive { grid-template-columns: 1fr; }
  }
  @media (max-width: 800px) {
    .modal-grid-responsive { grid-template-columns: 1fr; }
  }
  .event-card:hover .event-media-img-responsive { transform: scale(1.03); }
  .event-card:hover { transform: translateY(-6px); box-shadow: 0 14px 40px rgba(17,24,39,0.12); }
  .modal-overlay.open { display: flex; }
  .read-more-btn:focus { outline: 3px solid rgba(18,138,67,0.15); outline-offset: 2px; }
`;

export default function EventsPage() {
  useEffect(() => {
    // Modal functionality
    const modal = document.getElementById("event-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDate = document.getElementById("modal-date");
    const modalLocation = document.getElementById("modal-location");
    const modalImage = document.getElementById("modal-image");
    const modalDesc = document.getElementById("modal-desc");
    const modalClose = document.getElementById("modal-close");
    const modalBack = document.getElementById("modal-back");

    const openModal = (card: any) => {
      // @ts-ignore
      modalTitle.textContent = card.dataset.title;
      // @ts-ignore
      modalDate.textContent = card.dataset.date;
      // @ts-ignore
      modalLocation.textContent = card.dataset.location.split(" — ")[1];
      // @ts-ignore
      modalImage.src = card.dataset.image;
      // @ts-ignore
      modalImage.alt = card.dataset.title;
      // @ts-ignore
      modalDesc.textContent = card.dataset.full;
      // @ts-ignore
      modal.classList.add("open");
      // @ts-ignore
      modal.setAttribute("aria-hidden", "false");
    };

    const closeModal = () => {
      // @ts-ignore
      modal.classList.remove("open");
      // @ts-ignore
      modal.setAttribute("aria-hidden", "true");
    };

    // Add click handlers to read more buttons
    document.querySelectorAll(".read-more-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".event-card");
        openModal(card);
      });
    });
    // @ts-ignore
    modalClose.addEventListener("click", closeModal);
    // @ts-ignore
    modalBack.addEventListener("click", closeModal);
    // @ts-ignore
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    // Escape key to close modal
    const handleEscape = (e: KeyboardEvent) => {
      // @ts-ignore
      if (e.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />

      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Events
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
                Events
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section style={styles.byose}>
        <div style={styles.wrap}>
          <header style={styles.header}>
            <div>
              <h1 style={styles.headerH1}>Past Events</h1>
              <p style={styles.headerP}>
                Highlights from our community programs — photos and summaries
                from events we've already held.
              </p>
            </div>

            <div>
              <small style={styles.info}>Showing recent events</small>
            </div>
          </header>

          <main>
            <section
              className="events-grid events-grid-responsive"
              style={styles.eventsGrid}
              aria-label="Past events list"
            >
              <article
                className="event-card"
                style={styles.eventCard}
                data-title="Community Tree Planting Day"
                data-date="Aug 20, 2025"
                data-location="Kigali — Gisozi"
                data-image="img/bg_!.png"
                data-full="Over 120 volunteers joined our tree planting day to restore a damaged slope area. We planted 3,000 native seedlings and trained local youth on tree care and soil preservation. The event promoted biodiversity, reduced erosion and created livelihood opportunities through nursery management."
              >
                <div style={styles.eventMedia} aria-hidden="true">
                  <img
                    src="img/bg_!.png"
                    alt="Volunteers planting trees"
                    style={styles.eventMediaImg}
                    className="event-media-img-responsive"
                  />
                </div>

                <div style={styles.eventContent}>
                  <div style={styles.meta}>
                    <span style={styles.badge}>Education</span>
                    <span style={styles.info}>Aug 20, 2025 • Gisozi</span>
                  </div>

                  <h3 style={styles.title}>Foster primary Education </h3>

                  <p style={styles.desc}>
                    and map areas for future reforestation. The activity focused
                    on slope stabilization and youth engagement.
                  </p>

                  <div style={styles.cardFooter}>
                    <button
                      style={styles.readMoreBtn}
                      className="read-more-btn"
                      aria-haspopup="dialog"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </article>

              <article
                className="event-card"
                style={styles.eventCard}
                data-title="Nutrition & Mothercare Workshop"
                data-date="Jul 10, 2025"
                data-location="Ruhango — Community Hall"
                data-image="img/bg_2.png"
                data-full="This workshop trained 85 mothers on nutrition, breastfeeding best practices, hygiene and kitchen gardening. Practical sessions included making nutrient-dense meals using affordable local ingredients. The workshop linked participants to local health services and peer-support groups."
              >
                <div style={styles.eventMedia} aria-hidden="true">
                  <img
                    src="img/bg_2.png"
                    alt="Participants at mothercare workshop"
                    style={styles.eventMediaImg}
                    className="event-media-img-responsive"
                  />
                </div>

                <div style={styles.eventContent}>
                  <div style={styles.meta}>
                    <span style={styles.badge}>Education</span>
                    <span style={styles.info}>Jul 10, 2025 • Ruhango</span>
                  </div>

                  <h3 style={styles.title}>Nutrition & Mothercare Workshop</h3>

                  <p style={styles.desc}>
                    Practical, hands-on training for mothers about child
                    nutrition, hygiene and home kitchen gardening to improve
                    family food security and early-child development outcomes.
                  </p>

                  <div style={styles.cardFooter}>
                    <button
                      style={styles.readMoreBtn}
                      className="read-more-btn"
                      aria-haspopup="dialog"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </article>

              <article
                className="event-card"
                style={styles.eventCard}
                data-title="Youth Coding Bootcamp Graduation"
                data-date="Jun 05, 2025"
                data-location="Gisenyi — ALX Hub"
                data-image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop"
                data-full="Graduation for 24 youth who completed an 8-week coding bootcamp covering HTML, CSS, JavaScript and basic backend concepts. Students presented final projects and received mentorship on pathways to internships and freelance work."
              >
                <div style={styles.eventMedia} aria-hidden="true">
                  <img
                    src="img/agri.png"
                    alt="Graduates at coding bootcamp"
                    style={styles.eventMediaImg}
                    className="event-media-img-responsive"
                  />
                </div>

                <div style={styles.eventContent}>
                  <div style={styles.meta}>
                    <span style={styles.badge}>Agriculture</span>
                    <span style={styles.info}>Jun 05, 2025 • Gisenyi</span>
                  </div>

                  <h3 style={styles.title}>Simple livestock farming</h3>

                  <p style={styles.desc}>
                    Our first cohort completed an intensive program and
                    showcased apps for local problems — from farm marketplaces
                    to school management tools. Mentors and employers attended
                    the demo day.
                  </p>

                  <div style={styles.cardFooter}>
                    <button
                      style={styles.readMoreBtn}
                      className="read-more-btn"
                      aria-haspopup="dialog"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </article>
            </section>
          </main>
        </div>

        <div
          style={styles.modalOverlay}
          className="modal-overlay"
          id="event-modal"
          role="dialog"
          aria-modal="true"
          aria-hidden="true"
          aria-labelledby="modal-title"
        >
          <div style={styles.modal} className="modal" role="document">
            <div
              style={styles.modalGrid}
              className="modal-grid modal-grid-responsive"
            >
              <div
                style={styles.modalMedia}
                className="modal-media"
                id="modal-media"
              >
                <img
                  src=""
                  alt=""
                  id="modal-image"
                  style={styles.modalMediaImg}
                />
              </div>

              <div style={styles.modalBody} className="modal-body">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <h2 style={styles.modalBodyH2} id="modal-title">
                    Event Title
                  </h2>
                  <button
                    style={styles.modalClose}
                    className="modal-close"
                    id="modal-close"
                    aria-label="Close dialog"
                  >
                    ✕
                  </button>
                </div>

                <div
                  style={{ ...styles.meta, ...styles.modalBodyMeta }}
                  className="meta"
                  id="modal-meta"
                >
                  <span style={styles.info} className="info" id="modal-date">
                    Date
                  </span>
                  <span style={{ color: "#6b7280" }}>•</span>
                  <span
                    style={styles.info}
                    className="info"
                    id="modal-location"
                  >
                    Location
                  </span>
                </div>

                <p style={styles.modalBodyP} id="modal-desc">
                  Full event description goes here.
                </p>

                <div
                  style={{ ...styles.modalActions, marginTop: "auto" }}
                  className="modal-actions"
                >
                  <button
                    style={styles.btnSecondary}
                    className="btn-secondary"
                    id="modal-back"
                  >
                    Back to events
                  </button>
                  <button
                    style={styles.btnPrimary}
                    className="btn-primary"
                    id="modal-share"
                  >
                    Share / Download Photos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
