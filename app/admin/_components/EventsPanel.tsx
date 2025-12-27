"use client";

import { useEffect, useMemo, useState } from "react";

import type { Event } from "./types";

type Props = {
  events: Event[];
  loading: boolean;
  error: string;
  onRefresh: () => void;
};

export default function EventsPanel({
  events,
  loading,
  error,
  onRefresh,
}: Props) {
  const [selectedEventId, setSelectedEventId] = useState<string>("");

  useEffect(() => {
    if (!selectedEventId && events.length > 0) {
      setSelectedEventId(events[0]?.id ?? "");
    }
  }, [events, selectedEventId]);

  const selectedEvent = useMemo(
    () => events.find((e) => e.id === selectedEventId) ?? null,
    [events, selectedEventId]
  );

  return (
    <div className="row g-4">
      <div className="col-12 col-xl-7">
        <div className="card admin-card shadow-sm">
          <div className="card-header bg-white">
            <div className="d-flex align-items-center justify-content-between gap-2">
              <div>
                <div className="fw-semibold">All Events</div>
                <div className="text-muted small">
                  All created events (always published).
                </div>
              </div>
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                onClick={onRefresh}
              >
                Refresh
              </button>
            </div>
          </div>

          <div className="card-body">
            {loading ? (
              <div className="alert alert-info mb-0">Loading events...</div>
            ) : null}
            {!loading && error ? (
              <div className="alert alert-danger mb-0">{error}</div>
            ) : null}
            {!loading && !error && events.length === 0 ? (
              <div className="alert alert-secondary mb-0">No events yet.</div>
            ) : null}
          </div>

          {!loading && !error && events.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th style={{ width: "1%" }}>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th style={{ width: "1%" }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((e) => (
                    <tr
                      key={e.id}
                      role="button"
                      className={
                        selectedEventId === e.id ? "table-primary" : ""
                      }
                      onClick={() => setSelectedEventId(e.id)}
                    >
                      <td>
                        {e.coverImageUrl ? (
                          <img
                            src={e.coverImageUrl}
                            alt={e.title}
                            style={{
                              width: 44,
                              height: 44,
                              objectFit: "cover",
                              borderRadius: 8,
                            }}
                          />
                        ) : (
                          <div
                            className="bg-light border rounded"
                            style={{ width: 44, height: 44 }}
                          />
                        )}
                      </td>
                      <td>
                        <div className="fw-semibold">{e.title}</div>
                        <div
                          className="small text-muted text-truncate"
                          style={{ maxWidth: 360 }}
                        >
                          {e.shortSummary}
                        </div>
                      </td>
                      <td>{e.category}</td>
                      <td className="text-nowrap small text-muted">
                        {new Date(e.dateTime).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      </div>

      <div className="col-12 col-xl-5">
        <div className="card admin-card shadow-sm">
          <div className="card-header bg-white">
            <div className="fw-semibold">Event Preview</div>
          </div>
          <div className="card-body">
            {selectedEvent ? (
              <>
                {selectedEvent.coverImageUrl ? (
                  <img
                    src={selectedEvent.coverImageUrl}
                    alt={selectedEvent.title}
                    style={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                      borderRadius: 12,
                    }}
                  />
                ) : (
                  <div
                    className="bg-light border rounded"
                    style={{
                      width: "100%",
                      height: 220,
                      borderRadius: 12,
                    }}
                  />
                )}

                <div className="mt-3">
                  <div className="h5 mb-1">{selectedEvent.title}</div>
                  <div className="text-muted small">
                    {selectedEvent.category} • {selectedEvent.location}
                  </div>
                  <div className="text-muted small">
                    {new Date(selectedEvent.dateTime).toLocaleString()}
                  </div>
                </div>

                <hr />

                <div className="small text-muted mb-2">Short summary</div>
                <div className="mb-3">{selectedEvent.shortSummary}</div>

                <div className="small text-muted mb-2">Full description</div>
                <div
                  className="border rounded p-3 bg-light"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {selectedEvent.fullDescription}
                </div>
              </>
            ) : (
              <div className="text-muted">
                Select an event to preview details.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
