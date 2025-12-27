import type { AdminTab } from "./types";

type Props = {
  tab: AdminTab;
  messagesCount: number;
  onTabChange: (tab: AdminTab) => void;
};

export default function AdminSidebar({
  tab,
  messagesCount,
  onTabChange,
}: Props) {
  return (
    <div className="col-12 col-lg-3">
      <div className="card admin-card shadow-sm admin-sidebar">
        <div className="card-body">
          <div className="d-grid gap-2">
            <button
              type="button"
              className={`btn ${
                tab === "overview" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => onTabChange("overview")}
            >
              Overview
            </button>
            <button
              type="button"
              className={`btn ${
                tab === "create_event" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => onTabChange("create_event")}
            >
              Create Event
            </button>
            <button
              type="button"
              className={`btn ${
                tab === "events" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => onTabChange("events")}
            >
              Events
            </button>
            <button
              type="button"
              className={`btn ${
                tab === "messages" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => onTabChange("messages")}
            >
              Messages
              <span className="ms-2 badge text-bg-light">{messagesCount}</span>
            </button>
          </div>

          {/* <hr />

          <div className="small text-muted">Quick actions</div>
          <div className="d-grid gap-2 mt-2">
            <button
              type="button"
              className="btn btn-outline-secondary"
              disabled
            >
              Export Messages
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              disabled
            >
              Manage Categories
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
