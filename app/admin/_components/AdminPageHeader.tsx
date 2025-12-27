import type { AdminTab } from "./types";

type Props = {
  onTabChange: (tab: AdminTab) => void;
};

export default function AdminPageHeader({ onTabChange }: Props) {
  return (
    <div className="col-12">
      <div className="d-flex flex-wrap align-items-end justify-content-between gap-3">
        <div>
          <h1 className="h4 mb-1">Dashboard</h1>
          <div className="admin-muted">
            Manage events and review contact form messages.
          </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onTabChange("create_event")}
          >
            New event
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => onTabChange("messages")}
          >
            View inbox
          </button>
        </div>
      </div>
    </div>
  );
}
