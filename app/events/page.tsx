"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
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

type EventDto = {
  id: string;
  title: string;
  category: string;
  dateTime: string;
  location: string;
  coverImageUrl: string | null;
  shortSummary: string;
  fullDescription: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<EventDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("/api/events", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load events (${res.status})`);

        const data = (await res.json()) as EventDto[];
        if (cancelled) return;
        setEvents(Array.isArray(data) ? data : []);
      } catch (e) {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : "Failed to load events");
        setEvents([]);
      } finally {
        if (cancelled) return;
        setLoading(false);
      }
    };

    void load();
    return () => {
      cancelled = true;
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
              {loading ? (
                <div className="alert alert-info" role="status">
                  Loading events...
                </div>
              ) : error ? (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : events.length === 0 ? (
                <div className="alert alert-secondary" role="status">
                  No events yet.
                </div>
              ) : (
                events.map((e) => (
                  <article
                    key={e.id}
                    className="event-card"
                    style={styles.eventCard}
                  >
                    <div style={styles.eventMedia} aria-hidden="true">
                      {e.coverImageUrl ? (
                        <img
                          src={e.coverImageUrl}
                          alt={e.title}
                          style={styles.eventMediaImg}
                          className="event-media-img-responsive"
                        />
                      ) : (
                        <div style={{ width: "100%", height: "100%" }} />
                      )}
                    </div>

                    <div style={styles.eventContent}>
                      <div style={styles.meta}>
                        <span style={styles.badge}>{e.category}</span>
                        <span style={styles.info}>
                          {new Date(e.dateTime).toLocaleDateString()} •{" "}
                          {e.location}
                        </span>
                      </div>

                      <h3 style={styles.title}>{e.title}</h3>

                      <p style={styles.desc}>{e.shortSummary}</p>

                      <div style={styles.cardFooter}>
                        <Link
                          href={`/events/${e.id}`}
                          className="read-more-btn"
                          style={styles.readMoreBtn}
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </section>
          </main>
        </div>
      </section>
    </>
  );
}
