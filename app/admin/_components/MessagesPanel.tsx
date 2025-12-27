import type { Message } from "./types";

type Props = {
  messages: Message[];
  selectedMessageId: string;
  onSelectMessage: (id: string) => void;
  newMessages: number;
  selectedMessage: Message | null;
};

export default function MessagesPanel({
  messages,
  selectedMessageId,
  onSelectMessage,
  newMessages,
  selectedMessage,
}: Props) {
  return (
    <div className="row g-4">
      <div className="col-12 col-xl-7">
        <div className="card admin-card shadow-sm">
          <div className="card-header bg-white">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="fw-semibold">Inbox</div>
                <div className="text-muted small">
                  Messages submitted via contact form.
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="badge text-bg-success">{newMessages} new</span>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  disabled
                >
                  Mark all read
                </button>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th style={{ width: "1%" }}>Status</th>
                  <th>From</th>
                  <th>Subject</th>
                  <th style={{ width: "1%" }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((m) => (
                  <tr
                    key={m.id}
                    role="button"
                    className={
                      selectedMessageId === m.id ? "table-primary" : ""
                    }
                    onClick={() => onSelectMessage(m.id)}
                  >
                    <td>
                      {m.status === "new" ? (
                        <span className="badge text-bg-warning">New</span>
                      ) : (
                        <span className="badge text-bg-secondary">Read</span>
                      )}
                    </td>
                    <td>
                      <div className="fw-semibold">{m.name}</div>
                      <div className="small text-muted">{m.email}</div>
                    </td>
                    <td>
                      <div className="fw-semibold">{m.subject}</div>
                      <div
                        className="small text-muted text-truncate"
                        style={{ maxWidth: 320 }}
                      >
                        {m.message}
                      </div>
                    </td>
                    <td className="text-nowrap small text-muted">
                      {m.createdAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="col-12 col-xl-5">
        <div className="card admin-card shadow-sm">
          <div className="card-header bg-white">
            <div className="fw-semibold">Message Details</div>
          </div>
          <div className="card-body">
            {selectedMessage ? (
              <>
                <div className="d-flex align-items-start justify-content-between gap-2">
                  <div>
                    <div className="h6 mb-1">{selectedMessage.subject}</div>
                    <div className="text-muted small">
                      From:{" "}
                      <span className="fw-semibold">
                        {selectedMessage.name}
                      </span>{" "}
                      ({selectedMessage.email})
                    </div>
                  </div>
                  <span className="badge text-bg-light">
                    {selectedMessage.createdAt}
                  </span>
                </div>

                <hr />

                <div className="small text-muted mb-2">Message</div>
                <div className="border rounded p-3 bg-light">
                  {selectedMessage.message}
                </div>

                <div className="d-flex flex-wrap gap-2 justify-content-end mt-3">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    disabled
                  >
                    Reply
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    disabled
                  >
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <div className="text-muted">
                Select a message to view details.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
