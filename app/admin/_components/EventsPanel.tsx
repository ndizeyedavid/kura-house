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
  return (
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
                <th>Title</th>
                <th>Category</th>
                <th>Location</th>
                <th style={{ width: "1%" }}>Date</th>
                <th style={{ width: "1%" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e) => (
                <tr key={e.id}>
                  <td>
                    <div className="fw-semibold">{e.title}</div>
                    <div
                      className="small text-muted text-truncate"
                      style={{ maxWidth: 420 }}
                    >
                      {e.shortSummary}
                    </div>
                  </td>
                  <td>{e.category}</td>
                  <td className="text-truncate" style={{ maxWidth: 220 }}>
                    {e.location}
                  </td>
                  <td className="text-nowrap small text-muted">
                    {new Date(e.dateTime).toLocaleString()}
                  </td>
                  <td>
                    <span className="badge text-bg-success">Published</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
