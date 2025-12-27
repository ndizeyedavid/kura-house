import type { AdminTab, Message } from "./types";

type Stats = {
  totalEvents: number;
  publishedEvents: number;
  draftEvents: number;
  totalMessages: number;
  newMessages: number;
};

type Props = {
  stats: Stats;
  messages: Message[];
  onOpenMessages: () => void;
  onCreateEvent: () => void;
  onSelectMessage: (id: string) => void;
  onTabChange: (tab: AdminTab) => void;
};

export default function OverviewPanel({
  stats,
  messages,
  onOpenMessages,
  onCreateEvent,
  onSelectMessage,
  onTabChange,
}: Props) {
  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="row g-3">
          <div className="col-12 col-md-6 col-xl-3">
            <div className="card admin-card shadow-sm">
              <div className="card-body">
                <div className="admin-muted small">Total events</div>
                <div className="d-flex align-items-end justify-content-between mt-1">
                  <div className="h3 mb-0">{stats.totalEvents}</div>
                  <span className="badge text-bg-light">All</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3">
            <div className="card admin-card shadow-sm">
              <div className="card-body">
                <div className="admin-muted small">Published</div>
                <div className="d-flex align-items-end justify-content-between mt-1">
                  <div className="h3 mb-0">{stats.publishedEvents}</div>
                  <span className="badge text-bg-success">Live</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3">
            <div className="card admin-card shadow-sm">
              <div className="card-body">
                <div className="admin-muted small">Drafts</div>
                <div className="d-flex align-items-end justify-content-between mt-1">
                  <div className="h3 mb-0">{stats.draftEvents}</div>
                  <span className="badge text-bg-secondary">Draft</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3">
            <div className="card admin-card shadow-sm">
              <div className="card-body">
                <div className="admin-muted small">New messages</div>
                <div className="d-flex align-items-end justify-content-between mt-1">
                  <div className="h3 mb-0">{stats.newMessages}</div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                    onClick={onOpenMessages}
                  >
                    Open
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-xl-7">
        <div className="card admin-card shadow-sm">
          <div className="card-header bg-white border-0">
            <div className="fw-semibold">Recent messages</div>
            <div className="admin-muted small">Latest contact submissions</div>
          </div>
          <div className="list-group list-group-flush">
            {messages.slice(0, 3).map((m) => (
              <button
                key={m.id}
                type="button"
                className="list-group-item list-group-item-action"
                onClick={() => {
                  onSelectMessage(m.id);
                  onTabChange("messages");
                }}
              >
                <div className="d-flex align-items-start justify-content-between gap-3">
                  <div>
                    <div className="fw-semibold">{m.subject}</div>
                    <div className="admin-muted small">
                      {m.name} • {m.email}
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="small admin-muted">{m.createdAt}</div>
                    {m.status === "NEW" ? (
                      <span className="badge text-bg-warning">New</span>
                    ) : (
                      <span className="badge text-bg-secondary">Read</span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="card-body pt-0">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={onOpenMessages}
            >
              View all messages
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-xl-5">
        <div className="card admin-card shadow-sm">
          <div className="card-header bg-white border-0">
            <div className="fw-semibold">Quick actions</div>
            <div className="admin-muted small">Common admin tasks</div>
          </div>
          <div className="card-body">
            <div className="d-grid gap-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onCreateEvent}
              >
                Create a new event
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={onOpenMessages}
              >
                Review inbox ({stats.totalMessages})
              </button>
              {/* <button
                type="button"
                className="btn btn-outline-secondary"
                disabled
              >
                Settings (later)
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
